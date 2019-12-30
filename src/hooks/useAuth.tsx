const useAuth = () => {
  return process.browser ? JSON.parse(localStorage.getItem('session')) : null
}

export default useAuth
