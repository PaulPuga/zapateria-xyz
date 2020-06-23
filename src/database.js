function connectDB() {
  // window.indexedDB =
  //   window.indexedDB ||
  //   window.mozIndexedDB ||
  //   window.webkitIndexedDB ||
  //   window.msIndexDB;

  let request = window.indexedDB.open("zapateria-XYZ-DB", 1);
  let db, tx, store, index;

  request.onsuccess = (e) => {
    db = request.result;
  };
  request.onupgradeneeded = (e) => {
    let db = request.result;
    const user = db.createObjectStore("User");
  };
  request.onerror = (e) => {
    console.log(e.target.errorCode);
  };
}

export default { connectDB };
