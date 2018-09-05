// pages/imgdetail/imgdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgid:0,
    rightimgs: [], 
    connew: [], 
    images: [
      {
        id: '1',
        src:    'http://img.hb.aicdn.com/d23cbe968bf32a6383a4abe8469c4850cdfd8932c7dd-NUi9db_fw658',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '1',
        src: 'http://img.hb.aicdn.com/39c5ac76ce19d7a604811937f9f801587f9a61251298a-IANiRb_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '1',
        src: 'http://img.hb.aicdn.com/88ed908150239095a3707c251efbc4475c77bd6b315d2-RIdhsJ_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '1',
        src: 'http://img.hb.aicdn.com/b420553b3968cec50605f3ac875c600e3e7ac5c5129c8-SZJYHo_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '2',
        src: 'http://img.hb.aicdn.com/efd3b765ab4ec245536c7f0e7d77b257e308e5cf25147-PUMqWE_fw658',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '2',
        src: 'http://img.hb.aicdn.com/a3f797647db5a33139c0d81570e8b121181974d110eaf-W4s5Ij_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '2',
        src: 'http://img.hb.aicdn.com/8df8decb2c62a88107f893463daaa126389b6ae1da73-0FcnXU_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '2',
        src: 'http://img.hb.aicdn.com/e1c4f30fd651808161dcf248dd2cb927126b498fd89b-YgqV1o_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '3',
        src: 'http://img.hb.aicdn.com/cf67253f42788000685bfba92d5d5c1dc25b317a67b91-LUKHOO_fw658',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '3',
        src: 'http://img.hb.aicdn.com/9da91bdc3f84ac70f4988e1fe951813b69ba7ec951a46-zhDzpg_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '3',
        src: 'http://img.hb.aicdn.com/c7b689280bd7898c59f31aba7cb8819cd31f0c6bfd23-DiP1fS_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '3',
        src: 'http://img.hb.aicdn.com/e28726312d5545533dedd728b65b6b515f745214892cf-4re4zi_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '4',
        src: 'http://img.hb.aicdn.com/efd3b765ab4ec245536c7f0e7d77b257e308e5cf25147-PUMqWE_fw658',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '4',
        src: 'http://img.hb.aicdn.com/9da91bdc3f84ac70f4988e1fe951813b69ba7ec951a46-zhDzpg_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '4',
        src: 'http://img.hb.aicdn.com/c7b689280bd7898c59f31aba7cb8819cd31f0c6bfd23-DiP1fS_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '4',
        src: 'http://img.hb.aicdn.com/5cf7b3f7d5e0cd8516c401a6c9954f65392fffe91eb2d9-kGa2sw_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '5',
        src: 'https://images.unsplash.com/photo-1505421810888-a940f267b6ca?ixlib=rb-0.3.5&s=eed31d0f34903d34b38f97d5bb24251a&auto=format&fit=crop&w=1833&q=80',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '5',
        src: 'http://img.hb.aicdn.com/ee1ea4b2cdbb9186e88976ee1ad1c25c2b75a8392bd8a-juBv76_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '5',
        src: 'http://img.hb.aicdn.com/bc08c1e74d70dbad9ad859e098882ac90960a86627289-64eSht_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '5',
        src: 'http://img.hb.aicdn.com/35a67654158bf76b50d4ca25ff641b199502d8b488dcc-XqCPuq_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '6',
        src: 'https://images.unsplash.com/photo-1485700281629-290c5a704409?ixlib=rb-0.3.5&s=103b5228d4006d57335d679fbb420821&auto=format&fit=crop&w=1050&q=80',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '6',
        src: 'http://img.hb.aicdn.com/07173a1c9279c671588119b5cee80993119773266bc08-3hXLVv_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '6',
        src: 'http://img.hb.aicdn.com/1ba4e57e5b42c27e240993952de85fd8267f6a9a4b3f-b1DgDd_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '6',
        src: 'http://img.hb.aicdn.com/855903e24dd0947aa3b65905a32b0857ff4bf233c23b-i89M8D_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '7',
        src: 'https://images.unsplash.com/photo-1500994802273-2dd2df834939?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1c18977cd3eb528519a340af8f3d5a07&auto=format&fit=crop&w=662&q=80',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '7',
        src: 'http://img.hb.aicdn.com/55a64c6200d8c0967204e1aba989b910617ab1aeeb38-yUEUbp_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '7',
        src: 'http://img.hb.aicdn.com/b703c399aec674b9ac1e8175efc70aeaf8e0af8d2d80f1-2E6WJZ_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '7',
        src: 'http://img.hb.aicdn.com/bb383b5b620af7606fb94b881ce5021960c609c69be5-7POzBk_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '8',
        src: 'https://images.unsplash.com/photo-1480511361210-b1b966c8d614?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9a4002bcee51dc8258f5cb42060fa3f&auto=format&fit=crop&w=663&q=80',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '8',
        src: 'http://img.hb.aicdn.com/58f786e101d3e8246e28de925f41751eeccddce83f8f-abTPF5_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '8',
        src: 'http://img.hb.aicdn.com/76b5c0ab5fae942820f2436bafe102ec269807a24ddc2-62f8eN_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '8',
        src: 'http://img.hb.aicdn.com/8cd60371ddbc5ae1e346a3edd668eec9650b92fdf93d-i6LffR_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '9',
        src: 'https://images.unsplash.com/photo-1494336956603-39a3641efa1c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f94554232bf4c743544ba5a68c63bb5&auto=format&fit=crop&w=634&q=80',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '9',
        src: 'http://img.hb.aicdn.com/88b6b9eab29f5211fa62ecd88a6a7e169b6245503e08b-DQfodp_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '9',
        src: 'http://img.hb.aicdn.com/c84d34819fa6e21a9dddca573c81af01077bf336fb2a-0Mn8yI_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '9',
        src: 'http://img.hb.aicdn.com/8b33affa9fe165b000010903f808174013b71552ab1f-Lmru6i_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '10',
        src: 'https://images.unsplash.com/photo-1495121768032-1198a4749565?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f5d01a14f8a52be6c0e88d2f9c1f012&auto=format&fit=crop&w=800&q=80',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '10',
        src: 'http://img.hb.aicdn.com/0de58e7272f92877d6988c4e2d33b05165c443ad239fc-sazDTY_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '10',
        src: 'http://img.hb.aicdn.com/d0ea3abdd68835fdb343e88cc35321f0924556cb7896f-cpQvZe_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '10',
        src: 'http://img.hb.aicdn.com/b684503e6fc32a5c63f31a8fabb4d3b7074ab913afee-hYCCeP_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '11',
        src: 'https://images.unsplash.com/photo-1501250523374-8f78abda6b86?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63457a1902e6df3143c8591e66f9801b&auto=format&fit=crop&w=564&q=80',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '11',
        src: 'http://img.hb.aicdn.com/e9c0b1298a49bd3206003ec7c38f44a18cbbd82412fdd-ZpruZt_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '11',
        src: 'http://img.hb.aicdn.com/130018e2873278f8ef2e41b535cfd9a9b9223b641a7a3-QNQ71z_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '11',
        src: 'http://img.hb.aicdn.com/82e5cce31c54e2f056a423e3bba8fe892d07d81d37de0-a8PPui_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '12',
        src: 'http://img.hb.aicdn.com/2cc85e337623d5f0882143d87312f953a8a98fcf7ed1-iQQFPS_fw658',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '12',
        src: 'http://img.hb.aicdn.com/146caefcbe4f4137914d080e30ec76f3613b794fbb4a-BUGT3M_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '12',
        src: 'http://img.hb.aicdn.com/f58cec1f900870fab225eab0d46b81c76ffb4e75b053-7wfACm_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '12',
        src: 'http://img.hb.aicdn.com/c21e1dd7fd8615d6cabb948f920873631132bc9e70b2-bVhHeg_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '13',
        src: 'https://images.unsplash.com/photo-1500994802273-2dd2df834939?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1c18977cd3eb528519a340af8f3d5a07&auto=format&fit=crop&w=662&q=80',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '13',
        src: 'http://img.hb.aicdn.com/55a64c6200d8c0967204e1aba989b910617ab1aeeb38-yUEUbp_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '13',
        src: 'http://img.hb.aicdn.com/b703c399aec674b9ac1e8175efc70aeaf8e0af8d2d80f1-2E6WJZ_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '13',
        src: 'http://img.hb.aicdn.com/bb383b5b620af7606fb94b881ce5021960c609c69be5-7POzBk_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '14',
        src: 'https://images.unsplash.com/photo-1485700281629-290c5a704409?ixlib=rb-0.3.5&s=103b5228d4006d57335d679fbb420821&auto=format&fit=crop&w=1050&q=80',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '14',
        src: 'http://img.hb.aicdn.com/07173a1c9279c671588119b5cee80993119773266bc08-3hXLVv_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '14',
        src: 'http://img.hb.aicdn.com/1ba4e57e5b42c27e240993952de85fd8267f6a9a4b3f-b1DgDd_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '14',
        src: 'http://img.hb.aicdn.com/855903e24dd0947aa3b65905a32b0857ff4bf233c23b-i89M8D_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '15',
        src: 'https://images.unsplash.com/photo-1505421810888-a940f267b6ca?ixlib=rb-0.3.5&s=eed31d0f34903d34b38f97d5bb24251a&auto=format&fit=crop&w=1833&q=80',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '15',
        src: 'http://img.hb.aicdn.com/ee1ea4b2cdbb9186e88976ee1ad1c25c2b75a8392bd8a-juBv76_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '15',
        src: 'http://img.hb.aicdn.com/bc08c1e74d70dbad9ad859e098882ac90960a86627289-64eSht_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '15',
        src: 'http://img.hb.aicdn.com/35a67654158bf76b50d4ca25ff641b199502d8b488dcc-XqCPuq_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '16',
                src:'http://img.hb.aicdn.com/825cbab92f36927701ea18a81bedbe836a8a34e1f36e-jHZ5XB_fw658',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '16',
        src: 'http://img.hb.aicdn.com/2fc8bf1ad7c47726743e605b560edc14316423ee119e88-xoqvE9_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '16',
        src: 'http://img.hb.aicdn.com/e49976624db2456572c34edb95c9db779d87537b4b16-IrQ5SM_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '16',
        src:'http://img.hb.aicdn.com/5996b136081779a54eb6639d66a44a1f3a7797702a5b4-DDWwbd_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '17',
        src: 'http://img.hb.aicdn.com/ebebd28e7917f1d96bd14f0805e6f719e5d3800011c18-0U1cOS_fw658',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '17',
        src: 'http://img.hb.aicdn.com/21c6d7fb272f52ba79e3532b120c03c841dd606326085-GN8oEl_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '17',
        src: 'http://img.hb.aicdn.com/1a5c6d7732f480389cb0503d957d245a314eca122de2d-kNTRNF_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '17',
        src: 'http://img.hb.aicdn.com/9d20680aac44b8fde0681cdce86c4907f23c1e432c60e-mx930p_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '18',
        src: 'http://img.hb.aicdn.com/20bf0d33637bd6bf87663abba041888004187fe013eb9-GiUi4C_fw658',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '18',
        src: 'http://img.hb.aicdn.com/1b13aa2f5e8937434b38fd8c096239d6e0ba36476a371-F3Hfhw_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '18',
        src: 'http://img.hb.aicdn.com/b703c399aec674b9ac1e8175efc70aeaf8e0af8d2d80f1-2E6WJZ_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '18',
        src: 'http://img.hb.aicdn.com/bdf5bc999034254cb0eb3d49237d51d1b8dbf1eee563-q3qq8J_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '19',
        src: 'http://img.hb.aicdn.com/6bdbf1df5da071d92509f287b87ff02df3c4b04220357-8sLxeM_fw658',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '19',
        src: 'http://img.hb.aicdn.com/1079b1f290ebcfe27333c1105eb07627e93fcbb1646a1-GhumUY_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '19',
        src: 'http://img.hb.aicdn.com/6673520c47dc7f0ab6034f165dffab0840b253b410792-3xXm2N_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '19',
        src: 'http://img.hb.aicdn.com/9a99d6b80e9abc5b016ae85b842428f44a741487f697-NMwgVx_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '20',
        src: 'http://img.hb.aicdn.com/4205c583b25410905b80f8cedc5c35c4ee2a7c634d91-Mqo2ZN_fw658',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '20',
        src: 'http://img.hb.aicdn.com/00319733033f36ff083d6092776e7e1add5af408c0ab-gV5V8g_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '20',
        src: 'http://img.hb.aicdn.com/426112c4141a280f9cfbe50eb9f01a314f8068bc2ec7d8-PvrOfH_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '20',
        src: 'http://img.hb.aicdn.com/157820a89bab0493a0b63f853345de95b6bf71a02f12-3ttWHf_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '21',
        src: 'http://img.hb.aicdn.com/39ec9ab77d5d4d38d426bc6c2c9e237b2bac97d36e59-C5EkIA_fw658',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '21',
        src: 'http://img.hb.aicdn.com/fb90d89dec4c1d030e3bd41b1ac69d60e34defcd924e-ARASjL_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '21',
        src: 'http://img.hb.aicdn.com/2baabe1816842af28449c4abbf3985dcdabd738cb908-mXJ0MY_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '21',
        src: 'http://img.hb.aicdn.com/3a5245aa83b60172a05bb2bf36237c55096c61d27116-TJ1XCk_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '22',
        src: 'http://img.hb.aicdn.com/bcbc82dd914d613e854a90b611e1ee5fc7f7fc0f1a2df-TMK11H_fw658',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '22',
        src: 'http://img.hb.aicdn.com/47bc6741f5a272901407ef5bf14a834f44dffa03d48c-NHmRoL_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '22',
        src: 'http://img.hb.aicdn.com/0f1653ec9bb4a914cf0d64a205be6be2559f728aba65-CepOJp_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '22',
        src: 'http://img.hb.aicdn.com/63b34d27e81f059b819322d234073b23859ec672703e-8oxmUd_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '23',
        src: 'http://img.hb.aicdn.com/7b22358d57bf824f67c252b6da7196aeabe32509d8cd-gfXzLX_fw658',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '23',
        src: 'http://img.hb.aicdn.com/775ded23aed4b82961171dc7cfb30c977e645a04197b2-y9jGap_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '23',
        src: 'http://img.hb.aicdn.com/ab931b9e2cf8ac7755d8f523b9bc3e2e58c449671e0ac-ZeTomB_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '23',
        src: 'http://img.hb.aicdn.com/01e3974880782f79df9ea5fc85e523fe5e5c5b023937c-8RksQp_fw658',
        name: '￥199',
        data: '2017/11/4'
      },{
        id: '24',
        src: 'http://img.hb.aicdn.com/8bd2335e21753ed3a727d4503a92f25eaf2993636195c-L8R0HX_fw658',
        name: '￥199',
        data: '2017/11/1'
      },{
        id: '24',
        src: 'http://img.hb.aicdn.com/de44bf8cf5c2d4835ce0792e8da72d8936506c134dac5-xECwqI_fw658',
        name: '￥199',
        data: '2017/11/2'
      },{
        id: '24',
        src: 'http://img.hb.aicdn.com/525f989c3a72cb4bca247ff4bbfa69051030a79411ed6-fzIEgw_fw658',
        name: '￥199',
        data: '2017/11/3'
      },{
        id: '24',
        src: 'http://img.hb.aicdn.com/44ea561513642481070ffffaae2dd2d6c59cfab32154f-DvXEtr_fw658',
        name: '￥199',
        data: '2017/11/4'
      }



    ],
    cong:[{
      id:"1",
      discript:"太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
      price:"￥199",
         src:"http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
      src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
    }, {
        id: "2",
        discript: "满天星花语：甘愿做配角的爱，只愿在你身边.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/857010aa9dc442a8b7dd9fa405a78f59ce4453c3394de-bDJTRX_fw658",
src1: "http://img.hb.aicdn.com/07f6d57f3afef30138f3850e4062fc6dbe912a7051b2-84jkKh_fw658", src2: "http://img.hb.aicdn.com/a5545c31ab146c7971d07d121dd0420362c4fe76308d5-sj6FZ2_fw658"
      },
      {
        id: "3",
        discript: "玫瑰花语：一次偶然的凝眸, 就注定了一生的痴情依托. 这如梦的邂逅, 美丽的相逢……",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
        id: "4",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
        id: "5",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
        id: "6",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
        id: "7",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
        id: "8",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
        id: "9",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
        id: "10",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
        id: "11",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
        id: "12",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
        id: "13",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
        id: "14",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
        id: "15",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
        id: "16",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
        id: "17",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
      id:"18",
      discript:"太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
      price:"￥199",
         src:"http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
      src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
    },
      {
        id: "19",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
        id: "20",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
        id: "21",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
        id: "22",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
        id: "23",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      },
      {
        id: "24",
        discript: "太阳菊花语：象征神秘、互敬互爱，有毅力、不畏艰难.",
        price: "￥199",
        src: "http://img.hb.aicdn.com/145aea6fc2da6df564132003fc1cfed5ca8747d7356c-MC8aUy_fw658",
        src1: "http://img.hb.aicdn.com/fe787ea3d916ac032b4907ac79cd140b7fa6b3c9433f-D3G9B3_fw658", src2: "http://img.hb.aicdn.com/503ff15e82d7d00116279eb080d12aa30ac00ff63241-r6ZyD1_fw658"
      }
    ]

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var newimgs=[];
    var newcons=[];
    var that=this;
    this.setData({ imgid: decodeURIComponent(options.imgID)})
    for(var i=0;i<this.data.images.length;i++){
      var imgs = this.data.images
      if (imgs[i].id == this.data.imgid){
        newimgs.push(imgs[i]);
      }
    }
    this.setData({rightimgs:newimgs});
    for (var j = 0; j < this.data.cong.length;j++){
      var congs = this.data.cong;
      if (congs[j].id==this.data.imgid){
        newcons.push(congs[j]);
      }
      this.setData({ connew: newcons});
    }
  },
  shopcar: function () {
    wx.navigateTo({
      url: '/pages/buy/buy?shopcarid=' + this.data.imgid
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    console.log('--------下拉刷新-------');

    setTimeout(function () {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1000) 
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})