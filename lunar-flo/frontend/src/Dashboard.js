const predict = async () => {
  try {
    console.log("trying backend...");

    const res = await axios.post("http://localhost:5000/predict", {
      cycleLengths: cycles,
    });

    console.log("backend response:", res.data);
    setPrediction(res.data.predictedCycle);
  } catch (err) {
    console.log("FULL ERROR:", err);
    alert("Backend not running. Start backend first.");
  }
};