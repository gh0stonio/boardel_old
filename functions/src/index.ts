import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as moment from 'moment'

moment.locale('en')
admin.initializeApp(functions.config().firebase)

exports.postponeTasksFunction = functions.pubsub
  .schedule('every day 00:01')
  .timeZone('Europe/Paris')
  .onRun(context => {
    console.log('----- postponing all previous & unfinished tasks every day at 00:01 !')

    const db = admin.firestore()
    const startDate = moment(context.timestamp)
      .startOf('day')
      .toDate()
    const updatedDate = moment()
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
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(taskDoc => {
                console.log('updating task ', taskDoc.id, ' => new date', updatedDate)
                taskDoc.ref.update({
                  date: updatedDate,
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
