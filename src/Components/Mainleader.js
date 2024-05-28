import React from 'react'
import "./Mainleader.css"

function Mainleader() {
    return (
        <div className='mainlead'>
            <div className='inmain'>
                <div className='heading'>
                    <h1>LeaderBoards</h1>
                </div>
                <div className='leadermenu'>
                    <div className='inleadermenu'>
                        <div className='menuhead'>
                            <div className='basic'>Basic Backtest</div>
                            <div className='slipmenu'>
                                <div className='slip'>Slippage-</div>
                                <select>
                                    <option>0 %</option>
                                    <option>0.5 %</option>
                                    <option>1 %</option>
                                </select>
                            </div>
                        </div>
                        <div className='menudetail'>
                            <table>
                                <tr className='headrow'>
                                    <th>Rank</th>
                                    <th className="secondcoloumn">Name</th>
                                    <th>Calmar Ratio</th>
                                    <th>Overall Profit</th>
                                    <th>Avg. Daily Profit</th>
                                    <th>Win %(Day)</th>
                                    <th>Price (Rs)</th>
                                    <th>Action</th>
                                </tr>
                                <tr className='rows'>
                                    <td className="firstcoloumn">1</td>
                                    <td className="secondcoloumn">Selling with re entr</td>
                                    <td><i class="fa-solid fa-arrow-trend-up" style={{ color: "#00a803" }}></i> 3.96</td>
                                    <td>381845</td>
                                    <td>319.54</td>
                                    <td>0.65</td>
                                    <td>-</td>
                                    <td className="lastcoloumn">View</td>
                                </tr>
                                <tr className='rows'>
                                    <td className="firstcoloumn">2</td>
                                    <td className="secondcoloumn">strategy_name</td>
                                    <td><i class="fa-solid fa-arrow-trend-up" style={{ color: "#00a803" }}></i> 3.62</td>
                                    <td>268872.5</td>
                                    <td>216.31</td>
                                    <td>0.64</td>
                                    <td>500</td>
                                    <td className="lastcoloumn">Buy</td>
                                </tr>
                                <tr className='rows'>
                                    <td className="firstcoloumn">3</td>
                                    <td className="secondcoloumn">Based on premium and</td>
                                    <td><i class="fa-solid fa-arrow-trend-up" style={{ color: "#00a803" }}></i> 3.42</td>
                                    <td>255425</td>
                                    <td>208.51</td>
                                    <td>0.64</td>
                                    <td>-</td>
                                    <td className="lastcoloumn">View</td>
                                </tr>
                                <tr className='rows'>
                                    <td className="firstcoloumn">4</td>
                                    <td className="secondcoloumn">strategy_name</td>
                                    <td><i class="fa-solid fa-arrow-trend-up" style={{ color: "#00a803" }}></i> 3.22</td>
                                    <td>370845</td>
                                    <td>303.47</td>
                                    <td>0.65</td>
                                    <td>-</td>
                                    <td className="lastcoloumn">View</td>
                                </tr>
                                <tr className='rows'>
                                    <td className="firstcoloumn">5</td>
                                    <td className="secondcoloumn">strategy_name</td>
                                    <td><i class="fa-solid fa-arrow-trend-up" style={{ color: "#00a803" }}></i> 3.22</td>
                                    <td>370845</td>
                                    <td>303.47</td>
                                    <td>0.65</td>
                                    <td>-</td>
                                    <td className="lastcoloumn">View</td>
                                </tr>
                                <tr className='rows'>
                                    <td className="firstcoloumn">6</td>
                                    <td className="secondcoloumn">Based on premium wit</td>
                                    <td><i class="fa-solid fa-arrow-trend-up" style={{ color: "#00a803" }}></i> 3.01</td>
                                    <td>135980</td>
                                    <td>185.77</td>
                                    <td>0.49</td>
                                    <td>-</td>
                                    <td className="lastcoloumn">View</td>
                                </tr>

                                <tr className='rows'>
                                    <td className="firstcoloumn">7</td>
                                    <td className="secondcoloumn">strategy_name</td>
                                    <td><i class="fa-solid fa-arrow-trend-up" style={{ color: "#00a803" }}></i> 2.76</td>
                                    <td>267867.5</td>
                                    <td>218.49</td>
                                    <td>0.6</td>
                                    <td>-</td>
                                    <td className="lastcoloumn">View</td>
                                </tr>
                                <tr className='rows'>
                                    <td className="firstcoloumn">8</td>
                                    <td className="secondcoloumn">Wait and trade_Save	</td>
                                    <td><i class="fa-solid fa-arrow-trend-up" style={{ color: "#00a803" }}></i> 2.62</td>
                                    <td>178252.5</td>
                                    <td>161.9</td>
                                    <td>0.63</td>
                                    <td>-</td>
                                    <td className="lastcoloumn">View</td>
                                </tr>
                                <tr className='rows'>
                                    <td className="firstcoloumn">9</td>
                                    <td className="secondcoloumn">iron condor	</td>
                                    <td><i class="fa-solid fa-arrow-trend-up" style={{ color: "#00a803" }}></i> 2.44</td>
                                    <td>176420</td>
                                    <td>137.51</td>
                                    <td>0.65</td>
                                    <td>-</td>
                                    <td className="lastcoloumn">View</td>
                                </tr>
                                <tr className='rows'>
                                    <td className="firstcoloumn">10</td>
                                    <td className="secondcoloumn">strategy_name</td>
                                    <td><i class="fa-solid fa-arrow-trend-up" style={{ color: "#00a803" }}></i> 2.04</td>
                                    <td>244555</td>
                                    <td>198.66</td>
                                    <td>0.62</td>
                                    <td>-</td>
                                    <td className="lastcoloumn">View</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Mainleader
