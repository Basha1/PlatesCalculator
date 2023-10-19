// Array of available plate weights in kilograms
const plates = [25, 20, 15, 10, 5, 2.5, 1.5];

//Function to calaculate the plates needed for the target weight
const calculatePlates = () => {
  // Get the target weight and bar type from the inputs
  const targetWeight = parseFloat(
    document.getElementById("targetWeight").value
  );
  const barType = document.getElementById("barType").value;
targetWeight.innerHTML = '';
  // error check if the input is null
  if (isNaN(targetWeight) || targetWeight <= 0) {
    alert("Please enter a valid target weight.");
    return;
  }

  //Bar weight based on selected bar type
  const barWeight = barType === "20kg" ? 20 : 15;
  const remainingWeight = targetWeight - barWeight;

  // Initialize an object to store the count of each plate denomination
  let platesToUse = {};
  let currentWeight = remainingWeight;

  // calculate the number of plates needed
  for (const plate of plates) {
    // Calculate the number of plates needed for the current weight
    const numPlates = Math.floor(currentWeight / (plate * 2));

    if (numPlates > 0) {
      // Store the count of plates for this weight in the platesToUse object
      platesToUse[plate] = numPlates;
      // Update the current weight to reflect the remaining weight after using these plates
      currentWeight -= numPlates * plate * 2;
    }
  }

    // Display result
    displayResult(platesToUse);
};

// Function to display the calculation result
  const displayResult = (platesToUse) => {
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = '';  // Clear previous results
  
    for (const [weight, count] of Object.entries(platesToUse)) {
      resultList.innerHTML += `
        <li>
          ${count} plates of ${weight} kg
        </li>`;
    }
  };
