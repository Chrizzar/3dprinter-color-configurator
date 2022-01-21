// ----- Change color of the select components dependent on, if an option has been selected ----- //

// Primary Color 
var primary = document.getElementById('primaryColor')
primary.onchange = () => {
    // Initial color
    let color = 'white'

    // ------ eSUN Colors ------ //
    // Check background color and change font color accordingly
    if (primary.value == '#fbfbfd') color = 'black' // White
    else if (primary.value == '#fbcd27') color = 'black' // Yellow
    else if (primary.value == '#6be067') color = 'black' // Light Green
    else if (primary.value == '#b0acba') color = 'black' // Silver
    else if (primary.value == '#e7b291') color = 'black' // Beige
    else if (primary.value == '#ede9d6') color = 'black' // Natural
    else if (primary.value == '#56cff6') color = 'black' // Light Blue
    // ------ eSUN Colors ------ //
    else if (primary.value == '#b1b1b1') color = 'black' // Metallic Silver
    else if (primary.value == '#c7c7c6') color = 'black' // Metallic Light Gray
    else if (primary.value == '#d9d8d6') color = 'black' // Soft White
    else if (primary.value == '#f5f7f3') color = 'black' // Polar White
    else if (primary.value == '#ac96c6') color = 'black' // Pastel Purple
    else if (primary.value == '#eaaa20') color = 'black' // Golden Rod
    else if (primary.value == '#e8b889') color = 'black' // Tan
    else if (primary.value == '#f1e5b1') color = 'black' // Natural
    else if (primary.value == '#ddcb62') color = 'black' // Yellow (601.1, 459C)
    else if (primary.value == '#f3ea49') color = 'black' // Yellow (616, 101C)
    else if (primary.value == '#edec74') color = 'black' // Pastel Yellow
    else if (primary.value == '#eae599') color = 'black' // Pale Yellow
    else if (primary.value == '#5bdd45') color = 'black' // Neon Green
    else if (primary.value == '#6fc492') color = 'black' // Glow in the Dark Green
    else if (primary.value == '#bfd430') color = 'black' // Lulzbot Green
    else if (primary.value == '#cadb2a') color = 'black' // Flourescent Yellow
    else if (primary.value == '#cfdebc') color = 'black' // Glow in the Dark

    // Add your desired css style here:
    primary.style.cssText = `
            background-color: ${primary.value};
            color: ${color};
            border: 3px solid #333;
            font-weight: bold;
            `
}


// Accent 1
var select1 = document.getElementById('1_accent')
select1.onchange = () => {
    // Initial color
    let color1 = 'white'

    // Check background color and change font color accordingly
    if (select1.value == '#fbfbfd') color1 = 'black' // White
    else if (select1.value == '#fbcd27') color1 = 'black' // Yellow
    else if (select1.value == '#6be067') color1 = 'black' // Light Green
    else if (select1.value == '#b0acba') color1 = 'black' // Silver
    else if (select1.value == '#e7b291') color1 = 'black' // Beige
    else if (select1.value == '#ede9d6') color1 = 'black' // Natural
    else if (select1.value == '#56cff6') color1 = 'black' // Light Blue
    // ------ eSUN colors ------ //
    else if (select1.value == '#b1b1b1') color1 = 'black' // Metallic Silver
    else if (select1.value == '#c7c7c6') color1 = 'black' // Metallic Light Gray
    else if (select1.value == '#d9d8d6') color1 = 'black' // Soft White
    else if (select1.value == '#f5f7f3') color1 = 'black' // Polar White
    else if (select1.value == '#ac96c6') color1 = 'black' // Pastel Purple
    else if (select1.value == '#eaaa20') color1 = 'black' // Golden Rod
    else if (select1.value == '#e8b889') color1 = 'black' // Tan
    else if (select1.value == '#f1e5b1') color1 = 'black' // Natural
    else if (select1.value == '#ddcb62') color1 = 'black' // Yellow (601.1, 459C)
    else if (select1.value == '#f3ea49') color1 = 'black' // Yellow (616, 101C)
    else if (select1.value == '#edec74') color1 = 'black' // Pastel Yellow
    else if (select1.value == '#eae599') color1 = 'black' // Pale Yellow
    else if (select1.value == '#5bdd45') color1 = 'black' // Neon Green
    else if (select1.value == '#6fc492') color1 = 'black' // Glow in the Dark Green
    else if (select1.value == '#bfd430') color1 = 'black' // Lulzbot Green
    else if (select1.value == '#cadb2a') color1 = 'black' // Flourescent Yellow
    else if (select1.value == '#cfdebc') color1 = 'black' // Glow in the Dark

    // Add your desired css style here:
    select1.style.cssText = `
            background-color: ${select1.value};
            color: ${color1};
            border: 3px solid #333;
            font-weight: bold;
            `
}



// Frame color
var selectFrame = document.getElementById('frame_color')
selectFrame.onchange = () => {
    // Initial color
    let colorFrame = 'white'

    // ------ eSUN Colors ------ //
    // Check background color and change font color accordingly
    if (selectFrame.value == '#fbfbfd') colorFrame = 'black' // White
    else if (selectFrame.value == '#fbcd27') colorFrame = 'black' // Yellow
    else if (selectFrame.value == '#6be067') colorFrame = 'black' // Light Green
    else if (selectFrame.value == '#b0acba') colorFrame = 'black' // Silver
    else if (selectFrame.value == '#e7b291') colorFrame = 'black' // Beige
    else if (selectFrame.value == '#ede9d6') colorFrame = 'black' // Natural
    else if (selectFrame.value == '#56cff6') colorFrame = 'black' // Light Blue
    // ------ eSUN colors ------ //
    else if (selectFrame.value == '#b1b1b1') colorFrame = 'black' // Metallic Silver
    else if (selectFrame.value == '#c7c7c6') colorFrame = 'black' // Metallic Light Gray
    else if (selectFrame.value == '#d9d8d6') colorFrame = 'black' // Soft White
    else if (selectFrame.value == '#f5f7f3') colorFrame = 'black' // Polar White
    else if (selectFrame.value == '#ac96c6') colorFrame = 'black' // Pastel Purple
    else if (selectFrame.value == '#eaaa20') colorFrame = 'black' // Golden Rod
    else if (selectFrame.value == '#e8b889') colorFrame = 'black' // Tan
    else if (selectFrame.value == '#f1e5b1') colorFrame = 'black' // Natural
    else if (selectFrame.value == '#ddcb62') colorFrame = 'black' // Yellow (601.1, 459C)
    else if (selectFrame.value == '#f3ea49') colorFrame = 'black' // Yellow (616, 101C)
    else if (selectFrame.value == '#edec74') colorFrame = 'black' // Pastel Yellow
    else if (selectFrame.value == '#eae599') colorFrame = 'black' // Pale Yellow
    else if (selectFrame.value == '#5bdd45') colorFrame = 'black' // Neon Green
    else if (selectFrame.value == '#6fc492') colorFrame = 'black' // Glow in the Dark Green
    else if (selectFrame.value == '#bfd430') colorFrame = 'black' // Lulzbot Green
    else if (selectFrame.value == '#cadb2a') colorFrame = 'black' // Flourescent Yellow
    else if (selectFrame.value == '#cfdebc') colorFrame = 'black' // Glow in the Dark

    // Add your desired css style here:
    selectFrame.style.cssText = `
            background-color: ${selectFrame.value};
            color: ${colorFrame};
            border: 3px solid #333;
            font-weight: bold;
            `
}
