function updateContentFromCms() {
    const butter = Butter('ef095184cd49f6513158d6e0561d9614d35c1d57');
    
    butter.page.retrieve('*', 'landingpage')
    .then(resp => {
        const responseFields = resp.data.data.fields
        document.querySelector('#heading').textContent = responseFields.heading;
        document.querySelector('#content').innerHTML = responseFields.wysiwyg;
    })
    .catch(error => {
        console.log(error)
    });
}

updateContentFromCms();
