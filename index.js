

curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJHbUliUW9pZzF2ZDVvVVV2cmFDT01iNDI2cVU4cmdLNlI4NEZ6ZnNuZlJCVTF6Zm9raiIsImp0aSI6IjEzOTk3NTZkZmY1ZjZmMzUxNDRmYmVlYTlmM2IyZDM4NGMzMGUzMjQwZDY0NzkxMTI3N2JkMzcxNmY0NzY1Y2RiZTZkODZkZDBmZWViNTZkIiwiaWF0IjoxNjc3MzA1MDE5LCJuYmYiOjE2NzczMDUwMTksImV4cCI6MTY3NzMwODYxOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.Cjbxm6n6WBjMHw7IQ-lsgWCgEgdayfg3s7Aw-u1ve5RdloclWCXre0-1JSUy-cOpBUPlS5z7qTXtSKXuqRFkCMoJPxHpQ_q6tPCZe36WdzFKW0AoheJuX1j7o6Puxg7SdNRQ_La-acmqweTj6A09abkwFEKMXzFL4ksMMu7r9-eS_HswbfuEQE_wamqSSNYGvn3jLuONQQ8BY8K_N7BCfdui_2RGdB_QFiJ8CGm28tRWF0koVLa8hF3lC_XFXLisjs3tXiyfcQKUFWxXtfbhjm0uqAcbPlcBRHRwXUpm2Ip7Fuep6_94G2xv2PYdv7ngXttpXN1JXXHEcDLrDjJnKQ" GET https://api.petfinder.com/v2/animals?type=dog&page=2
//******API call for animals ******/
const loadAnimals = (foodCategory) => {
  $.get(
    `https://free-food-menus-api-production.up.railway.app/${foodCategory}`
  ).then(function(res) {
    // console.log(res);
    renderMealList(res, foodCategory);
  });
};