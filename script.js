document.getElementById('hostButton').addEventListener('click', function() {
    // Generate a random 5-digit code
    let blockCode = Math.floor(10000 + Math.random() * 90000);
    // Display the block code in the host section
    document.getElementById('blockCode').innerText = blockCode;

    // Show the host section
    document.getElementById('hostSection').classList.remove('hidden');
    document.getElementById('joinSection').classList.add('hidden');
});

document.getElementById('joinButton').addEventListener('click', function() {
    // Show the join section
    document.getElementById('joinSection').classList.remove('hidden');
    document.getElementById('hostSection').classList.add('hidden');
});

document.getElementById('joinSubmit').addEventListener('click', function() {
    let inputCode = document.getElementById('joinCode').value;
    let blockCode = document.getElementById('blockCode').innerText;

    if (inputCode === blockCode) {
        document.getElementById('joinStatus').innerText = "Successfully Joined!";
        document.getElementById('joinStatus').style.color = "green";
    } else {
        document.getElementById('joinStatus').innerText = "Invalid Code!";
        document.getElementById('joinStatus').style.color = "red";
    }
});
