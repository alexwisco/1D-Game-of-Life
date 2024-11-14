document.addEventListener('DOMContentLoaded', () => {
    // Create menu container
    const menuContainer = document.getElementById('menuContainer');

    // Create Rule Number Input
    const ruleLabel = document.createElement('label');
    ruleLabel.for = 'ruleInput';
    ruleLabel.textContent = 'Rule (0-255):';
    const ruleInput = document.createElement('input');
    ruleInput.type = 'number';
    ruleInput.id = 'ruleInput';
    ruleInput.min = 0;
    ruleInput.max = 255;
    ruleInput.placeholder = 'Enter rule number';

    // Create Initialization Dropdown
    const initLabel = document.createElement('label');
    initLabel.for = 'initSelect';
    initLabel.textContent = 'Initialization:';
    const initSelect = document.createElement('select');
    initSelect.id = 'initSelect';
    const centeredOption = new Option('Centered', 'centered');
    const randomOption = new Option('Random', 'random');
    initSelect.add(centeredOption);
    initSelect.add(randomOption);

    // Create Start Button
    const startButton = document.createElement('button');
    startButton.id = 'startButton';
    startButton.classList.add('button-design');
    startButton.textContent = 'Start';

    // Create Clear Button
    const clearButton = document.createElement('button');
    clearButton.id = 'clearButton';
    clearButton.classList.add('button-design');
    clearButton.textContent = 'Clear';

    // Append elements to menu container
    menuContainer.appendChild(ruleLabel);
    menuContainer.appendChild(ruleInput);
    menuContainer.appendChild(initLabel);
    menuContainer.appendChild(initSelect);
    menuContainer.appendChild(startButton);
    menuContainer.appendChild(clearButton);

    // Add event listener to the Start button
    startButton.addEventListener('click', () => {
        clearCanvas(); // clear just incase user doenst clear themselves.
        const ruleNumber = parseInt(ruleInput.value);
        const centered = initSelect.value === 'centered';

        if (isNaN(ruleNumber) || ruleNumber < 0 || ruleNumber > 255) {
            alert('Please enter a rule number between 0 and 255');
            return;
        }

        // Call Run with UI values
        Run(ruleNumber, centered);
    });

    // Add event listener to the Clear button
    clearButton.addEventListener('click', () => {
        clearCanvas();
    });
});
