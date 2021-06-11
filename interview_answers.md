# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

    Context API solves the problem of props drilling. It allows us to share information between components.


2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Action  it is the information, or action, that is taking place. Reducers are functions that take information and utilize it. The Store is a object that holds the state of the application.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

    Redux Thunk  allows  to write action creators that return a function instead of an action. It allows us to make API calls from our action creators.

4. What is your favorite state management system you've learned and this sprint? Please explain why!