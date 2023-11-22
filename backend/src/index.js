const app = require('./server');

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    }
);


process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    process.exit(0);
  });
  
  process.on('SIGTERM', function() {
    console.log( "\nGracefully shutting down from SIGTERM (Ctrl-C)" );
    process.exit(0);
  } );
  