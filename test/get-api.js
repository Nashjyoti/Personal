describe('api testing', function () {
  it('get api test', async function({supertest}) {
    await supertest
      .request("https://reqres.in")
      .get("/api/users/2")
      .expect(200)
      .expect('Content-Type', /json/)
      .then(function(response){
console.log(response.body.data.email)
      });
     // .then(function(response){
        //  expect(response._body.length).to.be.greaterThan(0);
     // });
  });
});
