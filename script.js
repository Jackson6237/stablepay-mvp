// 简单的前端交互：打开 Modal，生成二维码（使用公开 QR API）
const payBtn = document.getElementById('payBtn');
const payModal = document.getElementById('payModal');
const closeModal = document.getElementById('closeModal');
const recvAddressElm = document.getElementById('recvAddress');
const qrImage = document.getElementById('qrImage');
const confirmPaid = document.getElementById('confirmPaid');

// ==== 这里替换成你的真实收款地址（重要） ====
let RECEIVE_ADDRESS = '0x0000000000000000000000000000000000000000';
// 推荐：用以太坊/Tron 等公开地址（**绝对不要**在任何地方放私钥）

function openModal(){
  // 二维码数据：把接收地址放进去（可以是钱包 URI）
  const qrData = `ethereum:${RECEIVE_ADDRESS}`;
  const qrURL = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + encodeURIComponent(qrData);
  recvAddressElm.textContent = RECEIVE_ADDRESS;
  qrImage.src = qrURL;
  payModal.setAttribute('aria-hidden','false');
}

function close(){
  payModal.setAttribute('aria-hidden','true');
}

payBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', close);

// 手动确认按钮（MVP 用，后台未实现）
confirmPaid.addEventListener('click', ()=>{
  alert('已标记为“待人工核对”。请在链上确认交易后，手动处理兑付流程。');
  close();
});
