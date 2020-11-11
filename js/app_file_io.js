//
console.group('Entry');
console.log('app');
console.log('trying');
console.groupEnd();
//
$(function(){
    console.log('Ready!');
    //console.log( $('#in_File')[0] );
    //console.log( $('#btn_upload')[0] );

    const fileObj = {
        file: {},
        fileData: {}
    };
    
    $('#in_File').on('change', function(event){
        //console.log( 'change', new Date() );
        //console.log(event.target);
        
        /*
        const name = event.target.files[0].name;
        const lastDot = name.lastIndexOf('.');
        const fileName = name.substring(0, lastDot);
        const ext = name.substring(lastDot + 1);

        console.log('name', fileName);
        console.log('extension', ext);
        */
        //
        //const reader = new FileReader();
        //console.log( 'reader', reader );

        const file = event.target.files[0];
        /*
        console.log( 'file', file );
        console.log( 'name', file.name );
        console.log( 'size', file.size );
        console.log( 'type', file.type );
        */
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            //img.src = event.target.result;
            $('#img_file')[0].src = event.target.result;
            //$('#img_file').src = event.target.result;
            //console.log('load', event.target.result);
            fileObj.fileData = event.target.result;
        });
        reader.addEventListener('progress', (event) => {
            if (event.loaded && event.total) {
              const percent = (event.loaded / event.total) * 100;
              console.log(`Progress: ${Math.round(percent)}`);
            }
        });
        reader.readAsDataURL(file);

        // Setting the `file` in the variable above to be used further
        fileObj.file = file;
        //
        return false;
    });

    $('#btn_upload').on('click', function(event){

        //console.log('Btn Upload');
        //console.log('fileObj', fileObj );

        /*
        const url1 = 'https://file.io';
        const data1 = 'text= This is the testing of the API server.'
        //
        // sending the 'text' Data to the server.
        $.ajax({
            method : 'POST',
            url : url1,
            data : data1,
            error: function(err){
                console.log('ERROR');
                console.log( err );
            },
            success: function(sResult){
                console.log('success');
                //console.log( sResult );
                //$('#d_result').text( JSON.stringify(sResult) );
            }
        }).done(function(result){
            console.log('+-done------------------------');
            console.log( result );
            //$('#d_result').text( JSON.stringify(result) );
            $('#d_result').text( 'Sharable Link - '+ result.link );
            console.log('+-done------------------------');
        });
        */
        

        
        // Sending the image data
        const url1 = 'https://file.io';
        
        //const fileData = fileObj.fileData;
        /*
        let form_data = new FormData();
        form_data.append('file', fileObj.fileData);
        */

        //console.log( fileObj.file )
        //console.log( fileObj.file.name )

        const data1 = ('file=@'+fileObj.file.name );
        //const data1 = ('file=@'+fileObj.fileData );

        //console.log('data1', data1);
        $.ajax({
            method : 'POST',
            url : url1,
            data : data1,
            error : function(err){ 
                console.log('Error', err); 
                //console.log( err.responseText );
                console.log('');
                console.log( 'err.responseText', err.responseText );
            },
            success : function(result){ 
                console.log('Result', result);
            }
        });
        //
        return false;
    });

    // JQuery Plugin
    $('#fileupload').fileupload({
        dataType: 'json',
        done: function (e, data) {
            console.log('done');
            console.log( data.result );

            $('#d_result').text( JSON.stringify(data.result) );

            //$('<p></p>').text(data.result.link).appendTo(document.body);
        }
    });

    // JQuery | Without any plugin
    $("#i_upload").click(function() {
        var fileInput = jQuery('#i_file')[0];
        if (!fileInput.files.length) {
            alert("First choose a file.");
            return;
        }
    
        // Check here for browser support for FormData:
        // https://developer.mozilla.org/en-US/docs/Web/API/FormData
            
        var data = new FormData();
        jQuery.each(fileInput.files, function(i, file) {
            data.append('file', file);
        });    

        jQuery.ajax({
            url: 'https://file.io/',
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            method: 'POST',
            error: function(err) {
                console.log('ERROR')
                console.log(err.responseText);
            },
            success: function(data){
                console.log( 'success');
                console.log( data );
                //$('<p></p>').text(data.link).appendTo(document.body);
                $('#d_result').text( JSON.stringify(data) );
            }
        });
    });//Click 'Upload' Button

    
});// End JQuery 'Ready'


  

