let offset = 0
function next() {
    offset += 6
    $('#btn_prev').attr('disabled', false)
    $('#btn_next').attr('enabled', true)
    $.ajax({
        url: 'http://217.71.129.139:4598//api_ip23/get_videos.php?count=6&offset='+offset,
        method: 'get',
        dataType: 'json',
        success: function(data){
            $('#videos').html('')
            data['videos'].forEach(function(video) {

                let div = $('<div>')

                div.append('<img src="'+video['poster']+'">')
                div.append('<h3>'+video['title']+'</h3>')
                div.append('<h4>'+video['des']+'</h4>')
                $('#videos').append(div)

            });
        }
    });
}
function prev() {
    offset -= 6
    $('#btn_next').attr('disabled', false)
    $('#btn_next').attr('enabled', true)
    $.ajax({
        url: 'http://217.71.129.139:4598//api_ip23/get_videos.php?count=6&offset='+offset,
        method: 'get',
        dataType: 'json',
        success: function(data){
            $('#videos').html('')
            data['videos'].forEach(function(video) {

                let div = $('<div>')

                div.append('<img src="'+video['poster']+'">')
                div.append('<h3>'+video['title']+'</h3>')
                div.append('<h4>'+video['des']+'</h4>')

                $('#videos').append(div)
                
        
            });
        }
    });
}
 


function load_videos() {
    $.ajax({
        url: 'http://217.71.129.139:4598//api_ip23/get_videos.php',
        method: 'get',
        dataType: 'json',
        success: function(data){
            data['videos'].forEach(function(video) {

            let div = $('<div>')

            div.append('<img src="'+video['poster']+'">')
            div.append('<h3>'+video['title']+'</h3>')
            div.append('<h4>'+video['des']+'</h4>')
            
            
            
            $('#videos').append(div)
        
            });
        }
    });
}
