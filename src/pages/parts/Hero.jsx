import { PiAtomLight, PiUserListLight, PiWalletLight, PiMoneyWavyLight } from "react-icons/pi"
import rate from '../../assets/svg/trustpilot.svg'
import photo from '../../assets/img/photo.avif'

const blue = '#21A6FF'

const Hero = () => {

  return (
    <div id="hero" className='bg-hero'>
      <div className="flex aic jcsb h-84">
        <div className="container">
          <div className='row'>
            <div className="col-lg-8">
              <div className="w-80 mra p-y-64">
                <h2 className='title-intro c-white p-b-24'>Compliance Isn't a Goal, It's Your Fintech Journey</h2>
                <h3 className="title w-70 m-y-40 c-blue">Stop wasting time on DORA, GDPR, SOC2 firefighting. Build & scale confidently with Rogovsky Studio as your enduring guide.</h3>
                <div className='features flex m-y-40'>
                  <div>
                    <p className="flex aic h-3 m-r-24"><PiAtomLight size={24} color={blue} /><span className='title-mini c-white p-l-8'>DORA GDPR SOC2 Covered</span></p>
                    <p className="flex aic h-3 m-t-8"><PiWalletLight size={24} color={blue} /><span className='title-mini c-white p-l-8'>Ongoing Journey Support</span></p>
                  </div>
                  <div>
                    <p className="flex aic h-3 m-r-24"><PiUserListLight size={24} color={blue} /><span className='title-mini c-white p-l-8'>Personal Account Manager</span></p>
                    <p className="flex aic h-3 m-t-8"><PiMoneyWavyLight size={24} color={blue} /><span className='title-mini c-white p-l-8'>Full Regulatory Buy-in</span></p>
                  </div>
                </div>
                <div className='flex aic'>
                  <a href="#devs" className="button m-r-24">Meet a Team</a>
                  <img src={rate} alt="Trust Pilot Rating" className='m-b-8' width={120} height={56} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-t-8 m-hide">
              <div className="card-wrapper">
                <div className="card first">
                  <img src={photo} alt={'Andrey Rizhikov'} width={280} height={353} />
                  <h3 className="card-title">Andrey Rizhikov</h3>
                  <p className="card-text c-blue">Penetration Tester</p>
                  <div className="card-footer">
                    <p className="card-text">Andrey is a seasoned penetration tester with extensive experience identifying vulnerabilities and conducting comprehensive security audits for financial systems, ensuring robust protection against cyber threats.</p>
                  </div>
                </div>
                <div className="card second">
                  <img src={photo} alt={'Andrey Rizhikov'} width={280} height={353} />
                  <h3 className="card-title">Andrey Rizhikov</h3>
                  <p className="card-text c-blue">Penetration Tester</p>
                  <div className="card-footer">
                    <p className="card-text">Andrey is a seasoned penetration tester with extensive experience identifying vulnerabilities and conducting comprehensive security audits for financial systems, ensuring robust protection against cyber threats.</p>
                  </div>
                </div>
                <div className="card third">
                  <img src={photo} alt={'Andrey Rizhikov'} width={280} height={353} />
                  <h3 className="card-title">Andrey Rizhikov</h3>
                  <p className="card-text c-blue">Penetration Tester</p>
                  <div className="card-footer">
                    <p className="card-text">Andrey is a seasoned penetration tester with extensive experience identifying vulnerabilities and conducting comprehensive security audits for financial systems, ensuring robust protection against cyber threats.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero }
