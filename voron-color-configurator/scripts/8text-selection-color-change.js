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


// Accent 2
var select2 = document.getElementById('2_accent')
select2.onchange = () => {
    // Initial color
    let color2 = 'white'

    // Check background color and change font color accordingly
    if (select2.value == '#fbfbfd') color2 = 'black' // White
    else if (select2.value == '#fbcd27') color2 = 'black' // Yellow
    else if (select2.value == '#6be067') color2 = 'black' // Light Green
    else if (select2.value == '#b0acba') color2 = 'black' // Silver
    else if (select2.value == '#e7b291') color2 = 'black' // Beige
    else if (select2.value == '#ede9d6') color2 = 'black' // Natural
    else if (select2.value == '#56cff6') color2 = 'black' // Light Blue
    // ------ eSUN colors ------ //
    else if (select2.value == '#b1b1b1') color2 = 'black' // Metallic Silver
    else if (select2.value == '#c7c7c6') color2 = 'black' // Metallic Light Gray
    else if (select2.value == '#d9d8d6') color2 = 'black' // Soft White
    else if (select2.value == '#f5f7f3') color2 = 'black' // Polar White
    else if (select2.value == '#ac96c6') color2 = 'black' // Pastel Purple
    else if (select2.value == '#eaaa20') color2 = 'black' // Golden Rod
    else if (select2.value == '#e8b889') color2 = 'black' // Tan
    else if (select2.value == '#f1e5b1') color2 = 'black' // Natural
    else if (select2.value == '#ddcb62') color2 = 'black' // Yellow (601.1, 459C)
    else if (select2.value == '#f3ea49') color2 = 'black' // Yellow (616, 101C)
    else if (select2.value == '#edec74') color2 = 'black' // Pastel Yellow
    else if (select2.value == '#eae599') color2 = 'black' // Pale Yellow
    else if (select2.value == '#5bdd45') color2 = 'black' // Neon Green
    else if (select2.value == '#6fc492') color2 = 'black' // Glow in the Dark Green
    else if (select2.value == '#bfd430') color2 = 'black' // Lulzbot Green
    else if (select2.value == '#cadb2a') color2 = 'black' // Flourescent Yellow
    else if (select2.value == '#cfdebc') color2 = 'black' // Glow in the Dark

    // Add your desired css style here:
    select2.style.cssText = `
            background-color: ${select2.value};
            color: ${color2};
            border: 3px solid #333;
            font-weight: bold;
            `
}


// Accent 3
var select3 = document.getElementById('3_accent')
select3.onchange = () => {
    // Initial color
    let color3 = 'white'

    // ------ eSUN Colors ------ //
    // Check background color and change font color accordingly
    if (select3.value == '#fbfbfd') color3 = 'black' // White
    else if (select3.value == '#fbcd27') color3 = 'black' // Yellow
    else if (select3.value == '#6be067') color3 = 'black' // Light Green
    else if (select3.value == '#b0acba') color3 = 'black' // Silver
    else if (select3.value == '#e7b291') color3 = 'black' // Beige
    else if (select3.value == '#ede9d6') color3 = 'black' // Natural
    else if (select3.value == '#56cff6') color3 = 'black' // Light Blue
    // ------ eSUN colors ------ //
    else if (select3.value == '#b1b1b1') color3 = 'black' // Metallic Silver
    else if (select3.value == '#c7c7c6') color3 = 'black' // Metallic Light Gray
    else if (select3.value == '#d9d8d6') color3 = 'black' // Soft White
    else if (select3.value == '#f5f7f3') color3 = 'black' // Polar White
    else if (select3.value == '#ac96c6') color3 = 'black' // Pastel Purple
    else if (select3.value == '#eaaa20') color3 = 'black' // Golden Rod
    else if (select3.value == '#e8b889') color3 = 'black' // Tan
    else if (select3.value == '#f1e5b1') color3 = 'black' // Natural
    else if (select3.value == '#ddcb62') color3 = 'black' // Yellow (601.1, 459C)
    else if (select3.value == '#f3ea49') color3 = 'black' // Yellow (616, 101C)
    else if (select3.value == '#edec74') color3 = 'black' // Pastel Yellow
    else if (select3.value == '#eae599') color3 = 'black' // Pale Yellow
    else if (select3.value == '#5bdd45') color3 = 'black' // Neon Green
    else if (select3.value == '#6fc492') color3 = 'black' // Glow in the Dark Green
    else if (select3.value == '#bfd430') color3 = 'black' // Lulzbot Green
    else if (select3.value == '#cadb2a') color3 = 'black' // Flourescent Yellow
    else if (select3.value == '#cfdebc') color3 = 'black' // Glow in the Dark

    // Add your desired css style here:
    select3.style.cssText = `
            background-color: ${select3.value};
            color: ${color3};
            border: 3px solid #333;
            font-weight: bold;
            `
}


// Accent 4
var select4 = document.getElementById('4_accent')
select4.onchange = () => {
    // Initial color
    let color4 = 'white'

    // ------ eSUN Colors ------ //
    // Check background color and change font color accordingly
    if (select4.value == '#fbfbfd') color4 = 'black' // White
    else if (select4.value == '#fbcd27') color4 = 'black' // Yellow
    else if (select4.value == '#6be067') color4 = 'black' // Light Green
    else if (select4.value == '#b0acba') color4 = 'black' // Silver
    else if (select4.value == '#e7b291') color4 = 'black' // Beige
    else if (select4.value == '#ede9d6') color4 = 'black' // Natural
    else if (select4.value == '#56cff6') color4 = 'black' // Light Blue
    // ------ eSUN colors ------ //
    else if (select4.value == '#b1b1b1') color4 = 'black' // Metallic Silver
    else if (select4.value == '#c7c7c6') color4 = 'black' // Metallic Light Gray
    else if (select4.value == '#d9d8d6') color4 = 'black' // Soft White
    else if (select4.value == '#f5f7f3') color4 = 'black' // Polar White
    else if (select4.value == '#ac96c6') color4 = 'black' // Pastel Purple
    else if (select4.value == '#eaaa20') color4 = 'black' // Golden Rod
    else if (select4.value == '#e8b889') color4 = 'black' // Tan
    else if (select4.value == '#f1e5b1') color4 = 'black' // Natural
    else if (select4.value == '#ddcb62') color4 = 'black' // Yellow (601.1, 459C)
    else if (select4.value == '#f3ea49') color4 = 'black' // Yellow (616, 101C)
    else if (select4.value == '#edec74') color4 = 'black' // Pastel Yellow
    else if (select4.value == '#eae599') color4 = 'black' // Pale Yellow
    else if (select4.value == '#5bdd45') color4 = 'black' // Neon Green
    else if (select4.value == '#6fc492') color4 = 'black' // Glow in the Dark Green
    else if (select4.value == '#bfd430') color4 = 'black' // Lulzbot Green
    else if (select4.value == '#cadb2a') color4 = 'black' // Flourescent Yellow
    else if (select4.value == '#cfdebc') color4 = 'black' // Glow in the Dark

    // Add your desired css style here:
    select4.style.cssText = `
            background-color: ${select4.value};
            color: ${color4};
            border: 3px solid #333;
            font-weight: bold;
            `
}


// Accent 5
var select5 = document.getElementById('5_accent')
select5.onchange = () => {
    // Initial color
    let color5 = 'white'

    // ------ eSUN Colors ------ //
    // Check background color and change font color accordingly
    if (select5.value == '#fbfbfd') color5 = 'black' // White
    else if (select5.value == '#fbcd27') color5 = 'black' // Yellow
    else if (select5.value == '#6be067') color5 = 'black' // Light Green
    else if (select5.value == '#b0acba') color5 = 'black' // Silver
    else if (select5.value == '#e7b291') color5 = 'black' // Beige
    else if (select5.value == '#ede9d6') color5 = 'black' // Natural
    else if (select5.value == '#56cff6') color5 = 'black' // Light Blue
    // ------ eSUN colors ------ //
    else if (select5.value == '#b1b1b1') color5 = 'black' // Metallic Silver
    else if (select5.value == '#c7c7c6') color5 = 'black' // Metallic Light Gray
    else if (select5.value == '#d9d8d6') color5 = 'black' // Soft White
    else if (select5.value == '#f5f7f3') color5 = 'black' // Polar White
    else if (select5.value == '#ac96c6') color5 = 'black' // Pastel Purple
    else if (select5.value == '#eaaa20') color5 = 'black' // Golden Rod
    else if (select5.value == '#e8b889') color5 = 'black' // Tan
    else if (select5.value == '#f1e5b1') color5 = 'black' // Natural
    else if (select5.value == '#ddcb62') color5 = 'black' // Yellow (601.1, 459C)
    else if (select5.value == '#f3ea49') color5 = 'black' // Yellow (616, 101C)
    else if (select5.value == '#edec74') color5 = 'black' // Pastel Yellow
    else if (select5.value == '#eae599') color5 = 'black' // Pale Yellow
    else if (select5.value == '#5bdd45') color5 = 'black' // Neon Green
    else if (select5.value == '#6fc492') color5 = 'black' // Glow in the Dark Green
    else if (select5.value == '#bfd430') color5 = 'black' // Lulzbot Green
    else if (select5.value == '#cadb2a') color5 = 'black' // Flourescent Yellow
    else if (select5.value == '#cfdebc') color5 = 'black' // Glow in the Dark

    // Add your desired css style here:
    select5.style.cssText = `
            background-color: ${select5.value};
            color: ${color5};
            border: 3px solid #333;
            font-weight: bold;
            `
}


// Accent 6
var select6 = document.getElementById('6_accent')
select6.onchange = () => {
    // Initial color
    let color6 = 'white'

    // ------ eSUN Colors ------ //
    // Check background color and change font color accordingly
    if (select6.value == '#fbfbfd') color6 = 'black' // White
    else if (select6.value == '#fbcd27') color6 = 'black' // Yellow
    else if (select6.value == '#6be067') color6 = 'black' // Light Green
    else if (select6.value == '#b0acba') color6 = 'black' // Silver
    else if (select6.value == '#e7b291') color6 = 'black' // Beige
    else if (select6.value == '#ede9d6') color6 = 'black' // Natural
    else if (select6.value == '#56cff6') color6 = 'black' // Light Blue
    // ------ eSUN colors ------ //
    else if (select6.value == '#b1b1b1') color6 = 'black' // Metallic Silver
    else if (select6.value == '#c7c7c6') color6 = 'black' // Metallic Light Gray
    else if (select6.value == '#d9d8d6') color6 = 'black' // Soft White
    else if (select6.value == '#f5f7f3') color6 = 'black' // Polar White
    else if (select6.value == '#ac96c6') color6 = 'black' // Pastel Purple
    else if (select6.value == '#eaaa20') color6 = 'black' // Golden Rod
    else if (select6.value == '#e8b889') color6 = 'black' // Tan
    else if (select6.value == '#f1e5b1') color6 = 'black' // Natural
    else if (select6.value == '#ddcb62') color6 = 'black' // Yellow (601.1, 459C)
    else if (select6.value == '#f3ea49') color6 = 'black' // Yellow (616, 101C)
    else if (select6.value == '#edec74') color6 = 'black' // Pastel Yellow
    else if (select6.value == '#eae599') color6 = 'black' // Pale Yellow
    else if (select6.value == '#5bdd45') color6 = 'black' // Neon Green
    else if (select6.value == '#6fc492') color6 = 'black' // Glow in the Dark Green
    else if (select6.value == '#bfd430') color6 = 'black' // Lulzbot Green
    else if (select6.value == '#cadb2a') color6 = 'black' // Flourescent Yellow
    else if (select6.value == '#cfdebc') color6 = 'black' // Glow in the Dark

    // Add your desired css style here:
    select6.style.cssText = `
            background-color: ${select6.value};
            color: ${color6};
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
