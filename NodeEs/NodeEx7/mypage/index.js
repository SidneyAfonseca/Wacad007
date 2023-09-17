const text = [
    'Do nostrud aliqua adipisicing esse cupidatat esse sit qui excepteur aute aliqua. Qui mollit irure do officia consequat irure qui proident voluptate exercitation. Deserunt officia irure incididunt in do exercitation duis velit magna anim elit ut mollit. Voluptate eiusmod deserunt id et adipisicing. Lorem culpa fugiat officia ea enim ea qui in deserunt occaecat. Est consequat veniam magna voluptate commodo fugiat non quis est consectetur. Id reprehenderit et irure laborum qui reprehenderit.',
    'Sunt pariatur commodo laboris excepteur ullamco excepteur labore duis irure minim pariatur. Enim esse eu dolore consequat elit eiusmod cillum cillum officia veniam esse labore. Ea velit ex quis labore. Ea esse eu amet et exercitation id exercitation sit. Ut labore cupidatat et aliqua quis magna ea non consequat aute voluptate dolore. Ad irure deserunt minim proident ullamco ut commodo deserunt. Velit ex ad voluptate enim occaecat occaecat incididunt eiusmod veniam deserunt esse non voluptate est.',
    'Esse cupidatat do anim aliquip. Consectetur magna consequat nisi incididunt ut. Occaecat reprehenderit qui minim esse adipisicing occaecat ex consequat esse dolore excepteur aliquip. Eiusmod consequat consequat est dolor esse do sunt dolore. Cillum ex et proident quis labore laboris ea cupidatat est enim ex esse veniam.',
    'Est occaecat deserunt laborum ex et officia enim dolore labore. Anim sint aute adipisicing ullamco eu. Duis occaecat ut nisi irure Lorem. Incididunt pari  atur sunt ullamco eu ut velit do ea duis. Eiusmod nulla occaecat eu ut.',
    'Eu tempor fugiat ad enim ad est. Laboris amet minim id incididunt culpa dolor. Laboris cupidatat consectetur nisi do cupidatat ad reprehenderit ex do et.',
    'Dolore mollit et commodo ad. Esse elit aliqua dolore aliquip quis eiusmod eu cillum sit ex. Est pariatur consequat sit officia.',
    'Sunt fugiat excepteur aute pariatur est excepteur occaecat consectetur ad eu aliqua. Ex tempor tempor ullamco ea. Fugiat ipsum aute deserunt irure ea tempor excepteur est do nisi. Lorem nostrud commodo eu sint ea enim fugiat tempor nulla.',
    'Elit minim sit dolore mollit eu aliquip commodo non commodo fugiat id. Fugiat incididunt mollit eu nostrud cillum quis Lorem laboris irure sint elit mollit mollit culpa. Mollit pariatur adipisicing laboris exercitation duis eu commodo duis. Cillum Lorem proident in aliqua duis culpa sunt eiusmod eiusmod sint consequat eu occaecat voluptate.',
    'Ea proident ipsum veniam aliqua. Eu in est pariatur consequat pariatur fugiat est nostrud. Amet velit minim officia ipsum duis eiusmod. Ut amet fugiat id ex qui quis sint. Elit amet ipsum fugiat mollit aliquip proident do amet enim adipisicing. Et ea cupidatat tempor voluptate Lorem mollit in Lorem excepteur amet. Excepteur magna quis est ut sit minim amet aute consequat culpa nisi.',
    'Ex consequat velit culpa culpa irure adipisicing dolore laboris dolore est aliquip mollit anim. Est elit qui nostrud commodo enim. Ullamco reprehenderit consectetur adipisicing nostrud consequat esse excepteur minim commodo nisi mollit culpa. Reprehenderit quis tempor sit in commodo fugiat dolor. Officia aliquip consectetur fugiat dolore eiusmod deserunt. Voluptate enim enim mollit fugiat tempor duis.'
]

const form = document.querySelector(".form-lorem");
const qtd = document.getElementById('qtd');
const loremArticle = document.querySelector(".text-lorem");

form.addEventListener('submit', e => {
    e.preventDefault();
    const value = parseInt(qtd.value);
    let loremArray = text.slice(0, value);
    let textLorem = ""
    for(let i = 0; i < loremArray.length; i++){
        textLorem += `<p class="lorem-paragraph">${loremArray[i]}</p>`  
    }

    loremArticle.innerHTML = textLorem;
})



