$(function() {

  var queryURL = "https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.getRandom?format=json&key=2f95f51b181ddd27883e91878e922466&location=07728";
  var petId = "";
  $.ajax({
    url: queryURL,
    method: 'GET'
  })
  .then(response => {
    petId = response.petfinder.petIds.id.$t
    console.log(petId)
    var queryURL2 = "https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.get?format=json&key=2f95f51b181ddd27883e91878e922466&id=" + petId

    $.ajax({
      url: queryURL2,
      method: 'GET'
    })
    .then(response => {
      console.log(response)
      var pet = response.petfinder.pet;
      $("#petName").append(pet.name.$t)
      $("#petType").append(pet.animal.$t)
      $("#petBreed").append(pet.breeds.breed.$t)
      $("#petGender").append(pet.sex.$t)
      $("#petAge").append(pet.age.$t)
      $("#petSize").append(pet.size.$t)
      $("#petDescription").append(pet.description.$t)
      $("#petImg").attr("src", pet.media.photos.photo[2].$t)
    });
  });

  
});
