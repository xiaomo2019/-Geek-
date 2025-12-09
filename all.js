document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('copyEmailBtn').onclick = function(event) {
        event.preventDefault();
        var email = 'newthread_geek@outlook.com';
        var input = document.createElement('input');
        document.body.appendChild(input);
        input.value = email;
        input.select();
        
        if (document.execCommand('copy')) {
            alert('✅ 邮箱地址已复制：\n' + email);
        } else {
            alert('📧 邮箱地址：\n' + email + '\n\n请手动选中并复制');
        }
        
        document.body.removeChild(input);
    };
});