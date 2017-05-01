function makeStory() {
    // get form values (2 points)
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    var adjective1 = document.getElementById('adjective1').value;
    var pasttenseverb1 = document.getElementById('pasttenseverb1').value;
    var adjective2 = document.getElementById('adjective2').value;
    var pluralnoun1 = document.getElementById('pluralnoun1').value;
    var ingverb1 = document.getElementById('ingverb1').value;
    var adverb1 = document.getElementById('adverb1').value;
    var noun1 = document.getElementById('noun1').value;
    var verb1 = document.getElementById('verb1').value;
    var pluralnoun2 = document.getElementById('pluralnoun2').value;
    var adjective3 = document.getElementById('adjective3').value;
    var pasttenseverb2 = document.getElementById('pasttenseverb2').value;
    var adverb2 = document.getElementById('adverb2').value;
    var pluralnoun3 = document.getElementById('pluralnoun3').value;
    var noun2 = document.getElementById('noun2').value;
    var pluralnoun4 = document.getElementById('pluralnoun4').value;
    var name2 = document.getElementById('name2').value;
    var animal1 = document.getElementById('animal1').value;
    var name1 = document.getElementById('name1').value;
    var pasttenseverb3 = document.getElementById('pasttenseverb3').value;
    var noun3 = document.getElementById('noun3').value;

    // Set title of story. Use at least one form value in the title. (2 points)
    var title = "The Camping Trip";


    // Build story. you can add as many paragraphs as you like. (3 points)
message = name1 + " and " + name2 + " went on a "  + adjective1 +  " camping trip. They " +
          pasttenseverb1 + " their " + adjective2 + " " + pluralnoun1 + " and started " +
          ingverb1 + " " + adverb1 + " to build a " + noun1 + ". They knew they needed to " +
          verb1 + " a lot of " + pluralnoun2 + " before it became too " + adjective3 +
          " so they " + pasttenseverb2 + " very " + adverb2 + ". For a snack they decided to make " +
          pluralnoun3 + " on a " + noun2 + " and cook up a can of " + pluralnoun4 + ". As it got dark outside, " +
          name2 + " heard a " + animal1 + " make a sound in the woods! " + name1 + " was scared and " +
          pasttenseverb3 + " a " + noun3 + "!"

    // Display story by putting title & paragraphs into appropriate divs. (3 points)
    document.getElementById('title').innerHTML = title;
    document.getElementById('one').innerHTML = message;
}
