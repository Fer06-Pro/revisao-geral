import {firebaseConfig} from './firebase-config.js';
const ready = firebaseConfig.apiKey !== 'COLE_SUA_API_KEY' && firebaseConfig.projectId !== 'COLE_SEU_PROJECT_ID';
let auth,db,provider,googleSignIn,onAuthStateChanged,doc,getDoc,setDoc,onSnapshot;
export async function setupFirebase(callback){
 if(!ready){callback(null,false);return false}
 try{
 const [{initializeApp},{getAuth,GoogleAuthProvider,signInWithPopup,signInWithRedirect,onAuthStateChanged:watch,signOut},{getFirestore,doc:d,getDoc:g,setDoc:s,onSnapshot:watchDoc}] = await Promise.all([
 import('https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js'),
 import('https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js'),
 import('https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js')]);
 const app=initializeApp(firebaseConfig);auth=getAuth(app);db=getFirestore(app);provider=new GoogleAuthProvider();googleSignIn=async()=>{try{await signInWithPopup(auth,provider)}catch(e){if(e.code==='auth/popup-blocked')await signInWithRedirect(auth,provider);else throw e}};onAuthStateChanged=watch;doc=d;getDoc=g;setDoc=s;onSnapshot=watchDoc;window.__signOut=()=>signOut(auth);
 onAuthStateChanged(auth,u=>callback(u,true));return true;
 }catch(e){console.warn('Firebase indisponível',e);callback(null,false);return false}
}
export async function login(){if(!googleSignIn)throw Error('Configure o Firebase antes de entrar.');return googleSignIn()}
export function subscribe(uid,callback){return onSnapshot(doc(db,'studyProgress',uid),snap=>callback(snap.exists()?snap.data():null),err=>console.warn(err))}
export async function save(uid,data){if(!uid)return;await setDoc(doc(db,'studyProgress',uid),data,{merge:true})}
