        function myFunction() {
            var input, filter, ul, li, a, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            ul = document.getElementById("myUL");
            li = ul.getElementsByTagName("li");
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }
        /*Status changing according to class a (Approved) or r (Reviewing)*/
        var approved = document.getElementsByClassName('a');
        for (var i = 0; i < approved.length; i++) {
            approved[i].setAttribute("title", "Approved");
        }
        var review = document.getElementsByClassName('r');
        for (var i = 0; i < review.length; i++) {
            review[i].setAttribute("title", "Reviewing");
        }
        var downloadIcon = document.getElementsByClassName('download-icon');
        for (var i = 0; i < downloadIcon.length; i++) {
            downloadIcon[i].setAttribute("title", "Download .zip folder");
        }
