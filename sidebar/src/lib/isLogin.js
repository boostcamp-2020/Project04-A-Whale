const isLogin = () => !!localStorage.getItem('accessToken');

export default isLogin;
