/*
  api parameters;
    - resource: users or departments
    - operation: list or find
    - id: the id of a resource to find
*/

const USERS = [
  { id: 1, firstName: 'Hamza', lastName: 'Ak' },
  { id: 2, firstName: 'Elon', lastName: 'Musk' },
  { id: 3, firstName: 'John', lastName: 'Doe' }
];
const DEPARTMENTS = [
  { id: 1, firstName: 'Software Department' },
  { id: 2, firstName: 'Human Resource Department' },
  { id: 3, firstName: 'Financial Department' }
];

exports.api = (req, res) => {
  switch(req.query.resource) {
    case 'users': 
      switch(req.query.operation) {
        case 'list': res.status(200).send(USERS); break;
        case 'find': res.status(200).send(USERS.find(user => user.id === parseInt(req.query.id))); break;
        default: res.status(404).send(`operation: ${req.query.operation} - invalid operation`);
      };
      break;
    case 'departments':
      switch(req.query.operation) {
        case 'list': res.status(200).send(DEPARTMENTS); break;
        case 'find': res.status(200).send(DEPARTMENTS.find(x => x.id === parseInt(req.query.id))); break;
        default: res.status(404).send(`operation: ${req.query.operation} - invalid operation`);
      };
    default: res.status(404).send(`resource: ${req.query.resource} - invalid resource`);
  }
};
