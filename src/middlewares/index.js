export const myMiddleware = store => next => action => {
    console.log('this is my test middleware');
    next(action);
};