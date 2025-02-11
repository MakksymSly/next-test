(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2022:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(1019)}])},1019:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>w});var o=a(4848),l=a(7665),n=a(5072),s=a(2309),r=a(4335);let i="https://jsonplaceholder.typicode.com/todos",d=async()=>{await new Promise(e=>setTimeout(e,1e3));let e=await r.A.get("".concat(i,"?_limit=10"));return[...JSON.parse(localStorage.getItem("todos")||"[]"),...e.data]},c=async e=>{let t={...(await r.A.post(i,{title:e,completed:!1})).data,id:Date.now()},a=[...JSON.parse(localStorage.getItem("todos")||"[]"),t];return localStorage.setItem("todos",JSON.stringify(a)),t},u=async e=>{await r.A.delete("".concat(i,"/").concat(e));let t=JSON.parse(localStorage.getItem("todos")||"[]").filter(t=>t.id!==e);return localStorage.setItem("todos",JSON.stringify(t)),e},g=async(e,t)=>{let a=await r.A.put("".concat(i,"/",1),{title:t}),o=JSON.parse(localStorage.getItem("todos")||"[]").map(a=>a.id===e?{...a,title:t}:a);return localStorage.setItem("todos",JSON.stringify(o)),{...a.data,title:t}};var m=a(6540);let h=e=>{let{todo:t,removeTodo:a,editTodo:l,currentTodoRef:n}=e,[s,r]=(0,m.useState)(!1),[i,d]=(0,m.useState)("");return(0,m.useEffect)(()=>{s&&setTimeout(()=>{var e;null===(e=n.current)||void 0===e||e.focus()},0)},[s,n]),(0,o.jsxs)("div",{className:"flex items-center justify-between bg-white shadow-md p-4 rounded-lg border border-gray-200",children:[s?(0,o.jsx)("input",{value:i,onChange:e=>{d(e.target.value)},ref:n,className:"text-lg"}):(0,o.jsx)("p",{className:"text-lg ".concat(t.completed?"line-through text-gray-500":"text-black"),children:t.title}),(0,o.jsxs)("div",{className:"flex gap-2",children:[s?(0,o.jsx)("button",{onClick:()=>{l.mutate({id:t.id,title:i}),r(!1)},className:"px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition",children:"Done"}):(0,o.jsx)("button",{onClick:()=>{var e;r(!0),null===(e=n.current)||void 0===e||e.focus()},className:"px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition",children:"Edit"}),(0,o.jsx)("button",{onClick:()=>a.mutate(t.id),className:"px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition",children:"Delete"})]})]})};var x=a(9965),p=a.n(x);let f=e=>{let{todos:t,removeTodo:a,isPending:l,editTodo:n,currentTodoRef:s}=e;return(0,o.jsx)("div",{className:"space-y-2",children:l?(0,o.jsx)(p(),{src:"loading.svg",alt:"loading",width:50,height:50,className:"mx-auto pt-20"}):t.map(e=>(0,o.jsx)(h,{todo:e,removeTodo:a,editTodo:n,currentTodoRef:s},e.id))})},v=e=>{let{message:t}=e;return(0,o.jsx)("div",{className:"w-full h-full flex items-center justify-center bg-red-500 rounded-xl",children:t})};var b=function(e){return e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed",e}({});let y=()=>{let[e,t]=(0,m.useState)(""),[a,r]=(0,m.useState)(b.ALL),[i,h]=(0,m.useState)(""),x=(0,m.useRef)(null),p=e=>{t(e.target.value)},y=()=>{e.trim()&&(E.mutate(e),t(""))},w=(0,l.jE)(),{data:N,isPending:j,isError:S,error:C}=(0,n.I)({queryKey:["todos"],queryFn:d}),E=(0,s.n)({mutationFn:c,onMutate:async e=>{await w.cancelQueries({queryKey:["todos"]});let t={id:Date.now(),title:e,completed:!1,userId:Date.now()+1};w.setQueryData(["todos"],function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t,...e]})}}),T=(0,s.n)({mutationFn:u,onMutate:async e=>{await w.cancelQueries({queryKey:["todos"]}),w.setQueryData(["todos"],function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(t=>t.id!==e)})}}),D=(0,s.n)({mutationFn:e=>{let{id:t,title:a}=e;return g(t,a)},onMutate:async e=>{let{id:t,title:a}=e;await w.cancelQueries({queryKey:["todos"]}),w.setQueryData(["todos"],function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map(e=>e.id===t?{...e,title:a}:e)})}}),A=null==N?void 0:N.filter(e=>{switch(a){case b.ALL:return!0;case b.ACTIVE:return!e.completed;case b.COMPLETED:return e.completed;default:return!0}}).filter(e=>e.title.toLowerCase().includes(i.toLowerCase())),O=[{value:b.ALL,title:"All"},{value:b.ACTIVE,title:"Active"},{value:b.COMPLETED,title:"Completed"}];return(0,o.jsxs)("div",{className:"max-w-xl min-h-96 mx-auto p-4 bg-stone-50/20 rounded-2xl shadow-lg",children:[(0,o.jsx)("h1",{className:"text-3xl font-semibold text-center mb-4",children:"(˵ ͡~ ͜ʖ ͡\xb0˵)ﾉ⌒♡ TODO APP"}),(0,o.jsxs)("div",{className:"flex gap-2 mb-4",children:[(0,o.jsx)("input",{type:"text",placeholder:"Whatcha Gonna Do?",value:e,onChange:e=>p(e),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),y())},className:"w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"}),(0,o.jsx)("button",{onClick:y,className:"\n            ".concat(e.trim()?"bg-green-500 hover:bg-green-500/80":"bg-gray-200 cursor-not-allowed"," \n           text-white px-4 py-2 rounded-lg transition uppercase font-bold\n"),children:"just do it!"})]}),(0,o.jsxs)("div",{className:"flex items-center gap-2 text-xl mb-3",children:[(0,o.jsx)("p",{className:"font-semibold",children:"Filters:"}),O.map(e=>(0,o.jsx)("button",{onClick:()=>r(e.value),className:"px-4 py-2 rounded-lg font-semibold text-white transition-all shadow-md hover:shadow-lg\n             ".concat(a===e.value?"bg-sky-500 hover:bg-sky-600":"bg-stone-500 hover:bg-stone-600","\n           "),children:e.title},e.title))]}),(0,o.jsxs)("div",{className:"flex items-center gap-2 text-xl mb-3",children:[(0,o.jsx)("p",{className:"font-semibold",children:"Search:"}),(0,o.jsx)("input",{value:i,onChange:e=>{h(e.target.value)},className:"w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"})]}),S?(0,o.jsx)(v,{message:null==C?void 0:C.message}):(0,o.jsx)(f,{todos:null!=A?A:[],isPending:j,removeTodo:T,editTodo:D,currentTodoRef:x})]})};function w(){return(0,o.jsx)("div",{className:"p-7",children:(0,o.jsx)(y,{})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[62,636,593,792],()=>t(2022)),_N_E=e.O()}]);