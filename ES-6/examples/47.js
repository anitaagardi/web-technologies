function MyError(message) {
    this.name = 'CustomError';
    this.message = message || 'Error raised with default message';
}
try {
    throw new MyError();
} catch (e) {
    console.log(e.name);
    console.log(e.message);  // 'Default Message' 
}
