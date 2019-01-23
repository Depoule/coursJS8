function getNumber() {

    var age = document.getElementById('age').value;

    // si age est superieur ou égal à 18 on affiche "vous etes majeur"
    if (age >= 18) {

      alert(" Vous êtes majeur ");
    // sinon si ce n'est pas le cas on affiche "vous etes mineur"
    }else {
      alert(" Vous êtes mineur ");
    }
}
