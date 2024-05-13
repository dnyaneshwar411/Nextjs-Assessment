export default function Provider({ provider }) {
  return <div className="flex items-center gap-4 p-4 mt-4 backdrop-blur-[30px] backdrop-saturate-[210%] rounded-b-xl">
    <img src={provider.icon} alt="Image" className="w-12 aspect-square rounded-md" />
    <div>
      <h4>{provider.owner}</h4>
      <span className="font-light text-[12px]">{provider.cta}</span>
    </div>
    <div className="ml-auto w-max">
      <button className="bg-white p-1 w-16 block mx-auto rounded-2xl text-blue-600">GET</button>
      {provider.inAppPurchase && <p className="text-[12px] font-light">In-App Purchases</p>}
    </div>
  </div>
}