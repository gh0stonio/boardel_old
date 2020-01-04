import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as moment from 'moment'

moment.locale('en')
admin.initializeApp(functions.config().firebase)

exports.postponeTasksFunction = functions.pubsub
  .schedule('every day 01:30')
  .timeZone('Europe/Paris')
  .onRun(context => {
    console.log('----- postponing all previous & unfinished tasks every day at 01:30 !')

    const db = admin.firestore()
    const startDate = moment(context.timestamp)
      .startOf('day')
      .toDate()
    // today
    const updatedDateForPersonalTasks = moment(context.timestamp)
      .startOf('day')
      .toDate()
    // today or next monday if weekend
    const updatedDateForProfessionalTasks =
      moment(context.timestamp).isoWeekday() < 6
        ? updatedDateForPersonalTasks
        : moment(context.timestamp)
            .add(1, 'weeks')
            .isoWeekday(1)
            .startOf('day')
            .toDate()

    db.collection('users')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(userDoc => {
          db.collection('users')
            .doc(userDoc.id)
            .collection('tasks')
            .where('date', '<', startDate)
            .where('isDone', '==', false)
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(taskDoc => {
                const data = taskDoc.data()
                const newDate = data.category === 'personal' ? updatedDateForPersonalTasks : updatedDateForProfessionalTasks

                console.log(`updating task ${taskDoc.id} - [cat. ${data.category}] => new date ${newDate}`)
                taskDoc.ref.update({
                  date: newDate,
                  isPostpone: true,
                })
              })
            })
            .catch(error => console.log('error getting task documents: ', error))
        })
      })
      .catch(error => console.log('error getting user documents: ', error))

    return null
  })
