const useAuth = () => {
  return {
    refreshToken: localStorage.getItem('refreshToken'),
  }
};

export default useAuth;