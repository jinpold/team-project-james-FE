import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import countReducer from "@/redux/features/counter/counter.slice";
import articleReducer from "@/redux/features/articles/article.slice";
import userReducer from "@/redux/features/users/user.slice";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";


const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage = 
  // Redux의 storage는 영속적인 저장공간 (어떤 데이터이건 간에 여기로 모여서 저장된다.)
  // 저장공간에 데이터가 모여있다가 호출하면 할당되어서 실행된다.
  // React가 템플릿을 잡아주고 , Redux가 뿌려준다. (저장공간에서 )
  // React는 무상태이고, Redux는 상태가 있다.
  //  ex) 상태가 있는것 책 = Redux , 상태가 없는 것 E-BOOK = React
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const countPersistConfig = { 
  key: "count",
  storage,
  whitelist: ["countState"],
};
const articlePersistConfig = {
  key: "article",
  storage,
  whitelist: ["articleState"],
};

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["userState"],
};




const persistedCountReducer = persistReducer(countPersistConfig, countReducer);
const persistedArticleReducer = persistReducer(articlePersistConfig, articleReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);


export const rootReducer = combineReducers({
  count: persistedCountReducer, // 30번 키값이랑 일치해야함.
  article: persistedArticleReducer, // 36번 
  user: persistedUserReducer,
});

