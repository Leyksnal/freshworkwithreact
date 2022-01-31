import './App.css';

function App() {
  return (
    <div className="main">
      <div className="holder">
        <div className="inner">
          <div className="logo">
            <div className="logoimg"></div>
            <div className="text">Freshsales Suite</div>
          </div>
          <div className="nav-btn">
            <span>Features</span><span>Pricing</span><span>Resources</span><span>Industries</span><span>Login</span>
            <button className='action'>SIGN UP</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="box1">
          <button className='tag'><span>CRM</span></button>
          <h2 className='title'>Unite sales and marketing around the customer with an all-in-one CRM</h2>
          <p className='description'>Know customer intent to help sales convert faster with a 360° view</p>
          <div className="call-actions">
            <button className='action1'>SIGN UP</button>
            <button className='action2'>VIEW PRICING</button>
          </div>
        </div>
        <div className="box2"></div>
      </div>

      <div className="info-section">
        <div className="wrapper">
          <h2 className='heading'>How can Freshsales Suite help you grow your business?</h2>
          <div className="card-container">
            <div className="inner-card">
              <div className="cardimg1"></div>
              <p className="cardheading">Nurture relationships and grow revenue with a single customer view </p>
              <p className="cardsubheading">Deliver seamless engagement across channels with a 360° view of the customer. Unify sales and marketing teams to deliver customer delight.</p>
            </div>
            <div className="inner-card">
              <div className="cardimg2"></div>
              <p className="cardheading">Close deals faster by sending the right message at the right time</p>
              <p className="cardsubheading">Sales and marketing can work together to deliver personalized customer experiences. Understand customer intent and send the right message to close deals faster.</p>
            </div>
            <div className="inner-card">
              <div className="cardimg3"></div>
              <p className="cardheading">Reduce IT complexity & cost with a comprehensive solution</p>
              <p className="cardsubheading">Keep teams happy with a single, all-in-one solution that is affordable, easy to implement, and easier to use. Increase adoption, reduce costs and boost morale.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="opporunity-section">
        <div className="wrapper1">
          <div className="section-imgleft"></div>
          <div className="opportunity-info">
            <button className="opportunity-tag">FIND MORE OPPORTUNITIES</button>
            <h2 className="opportunity-heading">Attract the best leads. Generate 10X more opportunities.</h2>
            <p className="opportunity-subheading">Attract visitors, convert them into leads, run campaigns, and turn your website into a lead generation machine.</p>
            <h3 className="features">Top features:</h3>
            <div className="todo-wrapper">
              <div className="todoimg1"></div>
              <div className="todotext">Create <strong>landing pages</strong> in minutes. Monitor and understand visitor intent.</div>
            </div>
            <div className="todo-wrapper">
              <div className="todoimg2"></div>
              <div className="todotext">Understand visitor intent. Track <strong>page visits and even actions</strong> on your site.</div>
            </div>
            <div className="todo-wrapper">
              <div className="todoimg3"></div>
              <div className="todotext">Chat in real-time with website visitors using <strong>AI-powered chatbots</strong></div>
            </div>
            <div className="todo-wrapper">
              <div className="todoimg4"></div>
              <div className="todotext">Tailor <strong>email campaigns</strong> and generate cost-effective leads for sales</div>
            </div>
            <p className="more">Learn more {'->'}</p>
          </div>
        </div>
      </div>

      <div className="opporunity-section">
        <div className="wrapper1">
          <div className="opportunity-info">
            <button className="opportunity-tag">ENGAGE CONTEXTUALLY</button>
            <h2 className="opportunity-heading">Deliver personalized experiences at scale. Improve lead engagement.</h2>
            <p className="opportunity-subheading">Build tailored campaigns and optimize them with real-time data for better engagement.</p>
            <h3 className="features">Top features:</h3>
            <div className="todo-wrapper">
              <div className="todoimg5"></div>
              <div className="todotext">Get a <strong>360° view of a customer.</strong> Capture all customer interactions in one place.</div>
            </div>
            <div className="todo-wrapper">
              <div className="todoimg6"></div>
              <div className="todotext"><strong>Freddy AI</strong> identifies your best leads - the ones that are most likely to convert</div>
            </div>
            <div className="todo-wrapper">
              <div className="todoimg7"></div>
              <div className="todotext">Set up welcome emails or <strong>personalized journeys</strong> based on actions</div>
            </div>
            <div className="todo-wrapper">
              <div className="todoimg8"></div>
              <div className="todotext">Communicate across <strong>Phone, Email, WhatsApp, Chat</strong></div>
            </div>
            <p className="more">Learn more {'->'}</p>
          </div>
          <div className="section-imgright"></div>
        </div>
      </div>

      <div className="opporunity-section">
        <div className="wrapper1">
          <div className="section-imgleft1"></div>
          <div className="opportunity-info">
            <button className="opportunity-tag">CLOSE DEALS FASTER</button>
            <h2 className="opportunity-heading">Drive deals to closure, faster. Improve sales conversions by 50%.</h2>
            <p className="opportunity-subheading">Freddy AI helps you focus on the right deals that will drive revenue. Get insights across the funnel from lead to revenue with multi-touch attribution.</p>
            <h3 className="features">Top features:</h3>
            <div className="todo-wrapper">
              <div className="todoimg9"></div>
              <div className="todotext">Improve revenue predictability with <strong>Dynamic Forecasting</strong></div>
            </div>
            <div className="todo-wrapper">
              <div className="todoimg10"></div>
              <div className="todotext">Find the best deals to close with <strong>AI-based Deal Insights</strong></div>
            </div>
            <div className="todo-wrapper">
              <div className="todoimg11"></div>
              <div className="todotext"><strong>Collaborate on Slack</strong> across departments to close deals faster</div>
            </div>
            <p className="more">Learn more {'->'}</p>
          </div>
        </div>
      </div>

      <div className="opporunity-section">
        <div className="wrapper1">
          <div className="opportunity-info">
            <button className="opportunity-tag">NURTURE CUSTOMER RELATIONSHIPS</button>
            <h2 className="opportunity-heading">Develop nurture campaigns that delight customers. Increase repeat purchases by over 50%.</h2>
            <p className="opportunity-subheading">Nurture leads along the funnel with targeted campaigns, support customers with educational content, and build deeper relationships. </p>
            <h3 className="features">Top features:</h3>
            <div className="todo-wrapper">
              <div className="todoimg12"></div>
              <div className="todotext">Develop <strong>nurture campaigns</strong> with triggers, actions, and conditions</div>
            </div>
            <div className="todo-wrapper">
              <div className="todoimg13"></div>
              <div className="todotext"> Send <strong>transactional emails</strong> to customers to upsell and cross-sell</div>
            </div>
            <div className="todo-wrapper">
              <div className="todoimg14"></div>
              <div className="todotext">Get a breakdown of <strong>campaign analytics</strong> for a holistic understanding of your market and audience</div>
            </div>
            <p className="more">Learn more {'->'}</p>
          </div>
          <div className="section-imgright1"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
