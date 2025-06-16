const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod vitae mauris et euismod. In urna tortor, \
fringilla ac nisl vel, tincidunt fermentum erat. Duis molestie viverra fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing \
elit. Sed imperdiet turpis eu elit ultrices vestibulum. Ut aliquet turpis dui, convallis iaculis dolor scelerisque vitae. Nunc non \
sollicitudin est. Praesent dapibus nibh nec dictum congue. Nullam placerat nulla quis rhoncus congue. Proin auctor tellus non aliquam \
faucibus. Nam vitae metus dignissim, placerat quam sed, convallis elit. Vivamus eu est tincidunt, pharetra erat vitae, lacinia neque. \
Nunc non lectus ipsum. Nunc sem est, sodales eget laoreet in, mattis at magna. Nunc dictum felis vitae enim lobortis, eget ultricies \
ipsum porttitor. Sed ut fringilla turpis, non laoreet neque. Vestibulum suscipit libero vel augue elementum rhoncus eu eget ex. Proin \
viverra congue dolor ac cursus. Praesent in ornare massa, sed vestibulum velit. Nam quam leo, suscipit id consequat in, luctus vel dui. \
Fusce risus justo, lobortis vel lectus at, aliquam convallis eros. Vivamus vel ligula a nibh euismod volutpat ut convallis felis. \
Quisque placerat tortor eget pharetra molestie. Integer nec ligula et libero ultricies commodo nec at leo. Sed laoreet eros in massa \
egestas, at condimentum mauris rutrum. Mauris vel nunc porta, condimentum nulla nec, sollicitudin mauris. Pellentesque pretium eleifend \
tincidunt. Sed elit nisi, accumsan eget tortor sed, lacinia posuere magna. ";

const options_list = [];

const text_split = text.split(" ");
let i, j;
for (i = 0, j = 0; i < Math.floor(text_split.length / 3); i += 3, j++) {
    options_list.push({
        id: j,
        name: text_split.slice(i, i+3).join(" ")
    });
}

export default options_list;