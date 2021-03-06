Template.account.events({
    'submit form': function(event){
       
        var el = $(event.currentTarget)[0];
        var fname=$("#user-firstname").val();
        var lname=$("#user-lastname").val();
        var data = {
            "username": $("#username").val().trim(),
            "profile": {
                "firstname": $("#user-firstname").val(),
                "lastname": $("#user-lastname").val(),
                "gender": $("#user-gender").val(),
                "birthday": $("#user-birthday").val(),
                "bio": $("#user-bio").val(),
                "city": $("#user-city").val()
            }
        };
        Meteor.users.update({_id: Meteor.userId()},
            {
                $set: data
            },
            function(error, doc){
            if (error){
                alert(error);
            }
            else {
                console.log(Meteor.user());
            }
        });
    },
    'click .btn-remove-avatar': function(event){
        var userId = Meteor.userId();
        Meteor.users.update({_id: userId}, {
            $set: {
                "profile.avatar": null
            }
        });
    },
    'click .btn-change-avatar': function(event){
        $('#avatar-upload').click();
    },
    'change #avatar-upload': function(event, template){
        var file = event.currentTarget.files[0];
        var reader = new FileReader();
        var progress = document.querySelector('.percent');
        $('.percent').css('display','inline');        

  function updateProgress(evt) {
    // evt is an ProgressEvent.
    if (evt.lengthComputable) {
      var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
      // Increase the progress bar length.
      if (percentLoaded < 100) {
        progress.style.width = percentLoaded + '%';
        progress.textContent = percentLoaded + '%';
      }
    }
  }

    // Reset progress indicator on new file selection.
    progress.style.width = '0%';
    progress.textContent = '0%';

    reader.onprogress = updateProgress;
  
    reader.onloadstart = function(e) {
      document.getElementById('progress_bar').className = 'loading';
    };
 
 reader.onloadend = function(e) {
            var userId = Meteor.userId();
//            Meteor.call('avatar-upload', userId, file, reader.result);
         Meteor.users.update({_id: userId}, {
            $set: {
                "profile.avatar": reader.result
            }
        });
            progress.style.width = '100%';
            progress.textContent = '100%';
            $(progress).css('display','none');
        };
        reader.readAsDataURL(file);

}
});

Template.account.rendered = function(){
  $(document).ready(function(){
    
     $('.percent').css('display','none');
 $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
        
  
    
  });
 
};

