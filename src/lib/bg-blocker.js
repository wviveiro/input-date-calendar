let obj = null;

const create = () => {
    if (obj !== null) return;

    obj = document.createElement('div');
    obj.style.position = 'absolute';
    obj.style.top = '0px';
    obj.style.bottom = '0px';
    obj.style.left = '0px';
    obj.style.right = '0px';
    obj.style.zIndex = 1;
    document.body.append(obj);
}

const remove = () => {
    if (!obj) return;

    document.body.removeChild(obj);
    obj = null;
}

let _cb = null;
const onClick = (cb) => {
    if (!obj) return;

    if (_cb !== null) {
        obj.removeEventListener('click', _cb);
    }
    _cb = cb;
    obj.addEventListener('click', _cb);
}

const bgBlocker =  {create, remove, onClick};

export default bgBlocker;