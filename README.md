# Nomflix

Learning React and ES6 by building a Movie Discovery App.

## Screens

- [ ] Home
- [ ] TV shows
- [ ] Search
- [ ] Detail

## #2 Project Set Up
* ### #2.0 Set Up
  * npx create-react-app "제목"
  * .env > NODE_PATH=src
  * npm install prop-types
* ### #2.1 React Router Part. 1
  * .env > NODE_PATH 가 더이상 지원하지 않는다고 함.
  * package.json 과 같은 경로에 jsconfig.json 를 생성하여 새로운 경로지정 필요.

    ```javascript
    {
        "compilerOptions": {
            "baseUrl": "./src"
        },
        "include":["src"]
    }
    ```
  * react-router
    * React 에서 거의 유일한 Routing 패키지 
    * DOM에서 사용할 수 있고 (react-router-dom)
    * react-native에도 사용할 수 있음 (react-router-native)
    * 이 프로젝트에서는 react-router-dom만 사용
  * React Router는 간단한 컴포넌트 묶음이다.
    * 큰 컴포넌트는 다른 컴포넌트를 가질 거고, 모든 Router는 컴포넌트가 될 것이다.
    * 즉, 모두가 Component
  * React 에는 두 개의 컴포넌트를 Return 할 수 없다는 규칙이 있다.    
    * 이 때문에 Fragments를 사용
      ```javascript
      return <></>;
      ```
      * 내가 원하는 만큼 컴포넌트를 return 할 수 있게 해줌.
* ### #2.2 React Router Part. 1
  * 내가 설정하지 않은 주소로 가면 Redirect 할 수 있게 함.
  * 그냥 사용하면 두 개의 Route를 같이 Render 하게 되므로 Switch와 같이 사용
    * Switch - 오직 하나의 Route만 Render 하게 해줌 
  
  
