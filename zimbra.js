import { Selector } from 'testcafe';

 const username =Selector('#username'); 
 const password=Selector('#password');
 const submit2=Selector('#loginButton');
//  const remember=Selector('#remember');
//  const drop=Selector('select#client');
// const dropselect=drop.find('option');
//  const inbox=Selector('#zti__main_Mail__2_div');
 const sent=Selector('#zti__main_Mail__5_textCell');
 const newMsz=Selector('#zb__NEW_MENU_title');
 const sendto=Selector('#zv__COMPOSE-1_to_cell');
 const cc=Selector('#zv__COMPOSE-1_cc_control');
 const subj=Selector('#zv__COMPOSE-1_subject_control');
 const ifram=Selector('iframe#ZmHtmlEditor1_body_ifr'); //ZmHtmlEditor1_body_ifr
 const textarea=Selector('body#tinymce.mce-content-body');
 const send=Selector('#zb__COMPOSE-1__SEND_title');
 const contacts = Selector('#zb__App__Contacts_title');
 const calander =Selector('#zb__App__Calendar_title');
 const mail=Selector('#zb__App__Mail_title');
 const attach=Selector("#zb__COMPOSE-1___attachments_btn_title");
 const attachfile=Selector("tr[id='zv__COMPOSE-1_reply_attachments_link'] td:nth-child(1)"); //#zv__COMPOSE-1_attachments_div
 const imgattach=Selector('#mceu_19-button');

 
fixture `Getting Started`
.page `https://mapi.miraclesoft.com/`;

test.only('my first test', async t =>{
    await t 
    .maximizeWindow()
    .typeText(username,'sasi@miraclesoft.com')
    .typeText(password,'Srilalitha@5')
    .click(submit2)
    .wait(2000)
    .click(mail)
    .click(newMsz)
    .typeText(sendto,'pgedela@miraclesoft.com')
    .typeText(cc, 'sasi@miraclesoft.com')
    .typeText(cc,'smenda1@miraclesoft.com')
    .typeText(cc,' sasi@miraclesoft.com')
    .typeText(subj,'demo mail')
    .click(attach)
    .setFilesToUpload("input[title='Upload File']",'D:\img1.png')
    .switchToIframe(ifram)
    .click(textarea)
    .typeText("body div:nth-child(1)",'sample demo for file uplode')
    .expect(textarea.innerText).contains('sample')
    .switchToMainWindow()
    .click(send)
    .wait(3000);
     
});




