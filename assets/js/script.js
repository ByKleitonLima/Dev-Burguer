// Acesso a dispositivos moveis

function isMobileOrTablet() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobileOrTablet()) {
    document.body.innerHTML = `
        <div class="flex items-center justify-center min-h-screen bg-[#F0EDD8]">
            <div class="text-center p-4">
                <h1 class="text-[40px] font-bold text-[#F86106] mb-4">Acesso negado</h1>
                <p class="text-[20px]">Só é possível acessar pelo dispositivo móvel ou tablet.</p>
            </div>
        </div>
    `;
}


