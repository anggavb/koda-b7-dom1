const runStep = (action, timeout) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        action();
        resolve();
        }, timeout);
    });
}
  
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
  
const setLight = color => {
    red.className = "lamp";
    yellow.className = "lamp";
    green.className = "lamp";
  
    document.getElementById(color).classList.add("active", color);
}
  
const trafficCycle = async () => {
    try {
      await runStep(() => setLight("red"), 3000);
      await runStep(() => setLight("yellow"), 2000);
      await runStep(() => setLight("green"), 3000);
    } catch (err) {
      console.log("Error:", err);
    } finally {
      console.log("1 siklus selesai");
    }
}
  
;(async () => {
    while (true) {
      await trafficCycle();
    }
})();