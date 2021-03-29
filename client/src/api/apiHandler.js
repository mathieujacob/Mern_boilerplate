import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    throw error;
  }
  throw error;
}

const apiHandler = {
  service,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getArticles() {
    return service
      .get("/api/articles")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getArticle(ArticlesId) {
    
    return service
      .get("/api/articles/" + ArticlesId)
      .then((res) => res.data)
      .catch(errorHandler);
  },
  addArticles(uploadData) {
    return service
      .post("/api/articles", uploadData)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteArticles(ArticlesId) {
    return service
      .delete("/api/articles/"+ ArticlesId)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  UpdateArticles(ArticlesId, data) {

    return service
      .patch("api/articles/edit/"+ ArticlesId, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },


  getUser(UserId) {
    console.log(UserId);
    return service
      .get("/", UserId)
      .then((res) => res.data)
      .catch(errorHandler);
  },


};

export default apiHandler;
