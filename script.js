const btn = document.querySelector(".no");
let position = 0;

const moveButton = () => {
    position = position ? 0 : 150;
    btn.style.transform = `translate(${position}px, 0px)`;
    btn.style.transition = "all 0.2s ease";
};

btn.addEventListener("mouseover", moveButton);

const sim = document.getElementById('yes');

sim.addEventListener("click", () => {
    let timerInterval;
    Swal.fire({
        title: 'Obrigado 😍',
        html: 'Deixa o resto comigo. 💘',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector('b');
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
            window.open("https://api.whatsapp.com/send?phone=+5571986908525&text=Aceito+sim+vida%21+😍", "_blank");
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer');
        }
        
    });
});
