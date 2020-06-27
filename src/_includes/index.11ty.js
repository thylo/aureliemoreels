module.exports = function(data) {

    return `<pre>${data.biography.map(bio=>`<p>${bio.text}</p>`).join("")}</pre>`;
};