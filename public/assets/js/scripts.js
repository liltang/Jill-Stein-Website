

function showModal(candidate) {
    vex.dialog.buttons.YES.text = 'Login To Facebook';
    vex.dialog.buttons.NO.text = 'Nevermind';
    var message;
    if (candidate == "trump") {
        message = 'You choose Team Trump. Login to Find a Match from Team Hillary';
    } else {
        message = 'You choose Team Hillary. Login to Find a Match from Team Trump';
    }
    vex.dialog.confirm({
        message: message,
        callback: function(value) {
            if (value) {
              // Going to have a host in prouction, so for now hardcode the link
              // Later we want to take all of these URLs and obfuscate them
              // So we can have different links in dev and prod and to keep server hidden
                window.location.href = "http://localhost:6001/facebookAuth";
            } else {
              console.log("Monitoring this error, probably just means modal was closed");
            }
        }
    });
}
