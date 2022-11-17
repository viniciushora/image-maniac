const sectionimg = document.querySelector("#sectionimg")
sectionimg.innerHTML = `<img src="nada">`
const img = sectionimg.querySelector('img')

const fetchimg = () => {
    const token = localStorage.getItem('token')
    if (!token) {
        img.src = "nada"
    } else {
        fetch('img', {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                const { link } = data
                if (link) {
                    img.src = link
                }
            })
    }
}

const observerCallback = function (mutationList, observer) {
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
            fetchimg()
        }
    }
}

const changeObserver = new MutationObserver(observerCallback)
changeObserver.observe(sectionlogin, { childList: true })
