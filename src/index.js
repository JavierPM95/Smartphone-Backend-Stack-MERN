const app = require('./app');
require('./database');

//Port config
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'))
});