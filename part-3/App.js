let people = [{
  name: 'martin',
  age: 12,
  hobbies: ['videogames', 'basketball']
},
{
  name: 'richard',
  age: 21,
  hobbies: ['videogames', 'basketball']
},
{
  name: 'lebronjames',
  age: 32,
  hobbies: ['basketball', 'tacos']
}]


ReactDOM.render(
  <div>
    <Person data={people[0]}/>
    <Person data={people[1]}/>
    <Person data={people[2]}/>
  </div>, document.getElementById('root'))