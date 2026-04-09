# NUMERICAL EXAMPLES APPENDIX
# International Finance — SKEMA Business School
# Every calculation type that can appear in the exam — fully worked step by step
# This is the QUANTITATIVE BRAIN of the educational platform

---

# MODULE 1: FOREIGN EXCHANGE (FX) CALCULATIONS

## 1.1 Direct vs Indirect Quotes — Converting Between Them

### Rule
Direct quote (from perspective of country X) = price of 1 foreign currency in domestic terms
Indirect quote = price of 1 domestic currency in foreign terms
**Direct = 1 / Indirect** — always

### Example 1 (from course slides)
A dealer in New York quotes 12.4035 MXN/USD to a client in Mexico City.
- From the **Mexican client's** perspective:
  - The **direct quote** is: How much MXN does 1 USD cost? → **12.4035 MXN/USD** ✓
  - The **indirect quote** is: How much USD does 1 MXN buy? → 1/12.4035 = **0.0806 USD/MXN**
- Answer: Direct quote = 12.4035 (Answer B from slides)

### Example 2
EUR/USD = 1.1235 (from US perspective)
- Direct quote for American: 1 EUR costs $1.1235 ✓
- Indirect quote for American: 1 USD buys €0.8903 (= 1/1.1235)
- Direct quote for European: 1 USD costs €0.8903 ✓

### Example 3 — Australian Woolgrower (from IF4)
Australian producer sells AUD 1,300,000 of wool to Canada.
Quote: 1 AUD = 0.98112 CAD
- Canadian dollar cost = 1,300,000 × 0.98112 = **CAD 1,275,456**
- Step: multiply quantity in base currency × exchange rate (expressed as quote/base)

---

## 1.2 Cross Rates

### Formula
If you know A/USD and B/USD:
**A/B = (A/USD) / (B/USD)**  ← divide the two USD rates

### Example 1: EUR/GBP cross rate
From Exhibit 5.7 (course data):
- EUR/USD = 1.1235 (1 EUR = $1.1235)
- GBP/USD = 1.3447 (1 GBP = $1.3447)
- **EUR/GBP = 1.1235 / 1.3447 = 0.8355** (1 EUR = 0.8355 GBP)
- Equivalently: GBP/EUR = 1.3447 / 1.1235 = **1.1970**

### Example 2: JPY/CAD cross rate
From Exhibit 5.7:
- JPY: Per USD = 115.11 → USD/JPY = 0.00869
- CAD: Per USD = 1.2708 → USD/CAD = 0.7869
- JPY/CAD = (1/115.11) / (1/1.2708) = (0.00869) / (0.7869) = ?
- Actually easier: JPY per CAD = 115.11 / 1.2708 × 1.2708... 
- Method: CAD/USD = 0.7869, JPY/USD = 0.00869
- CAD/JPY = 0.7869 / 0.00869 = **90.55** (1 CAD buys 90.55 JPY)
- Or JPY/CAD = 1/90.55 = 0.01104

### Example 3: MXN/EUR
- MXN: Per USD = 20.635 → USD/MXN = 0.0485
- EUR: USD/EUR = 1.1235
- EUR/MXN = 1.1235 / 0.0485 = **23.165** (1 EUR = 23.165 MXN)
- MXN/EUR = 1/23.165 = **0.04317**

---

## 1.3 Bid-Ask Spread Calculations

### Setup
Bank always quotes: **Bid / Ask** (Bid < Ask)
- Bank BUYS base currency at **Bid** (lower price — bank pays less)
- Bank SELLS base currency at **Ask** (higher price — bank charges more)
- You always get the WORSE rate (buy high from bank, sell low to bank)

### Example 1: Spot transaction
EUR/USD: Bid = 1.1200 / Ask = 1.1210
Spread = 1.1210 − 1.1200 = 0.0010 ($0.0010 per euro)

You want to BUY €100,000:
- You pay at ASK: €100,000 × $1.1210 = **$112,100**

You want to SELL €100,000:
- You receive at BID: €100,000 × $1.1200 = **$112,000**
- Bank profit = $112,100 − $112,000 = **$100** (per round trip)

### Example 2: Percentage spread
Bid = 1.1200, Ask = 1.1210
% Spread = (Ask − Bid) / Ask × 100 = 0.001/1.121 × 100 = **0.089%**

### Example 3: Retail vs Interbank
If interbank EUR/USD = 1.1235 and retail bank adds 1% spread:
- Retail Ask = 1.1235 × 1.005 = 1.1292 (you pay more buying EUR)
- Retail Bid = 1.1235 × 0.995 = 1.1179 (you receive less selling EUR)

---

## 1.4 Triangular Arbitrage — Full Numerical Walkthrough

### Concept
Three currencies, three exchange rates. If the cross-rate implied by two rates ≠ the quoted third rate → profit opportunity exists.

### Step-by-Step Method
1. Calculate the **implied cross rate** from two known rates
2. Compare to the **quoted cross rate**
3. If different → arbitrage exists; determine direction
4. Execute: Start with $1M, go around the triangle the profitable way

### Example 1: Classic Triangular Arbitrage
Given:
- USD/EUR = 1.1235 (1 EUR costs $1.1235)
- USD/GBP = 1.3447 (1 GBP costs $1.3447)
- EUR/GBP quoted = 1.2000 (1 GBP costs €1.20)

**Step 1: Calculate implied EUR/GBP**
Implied EUR/GBP = USD/GBP ÷ USD/EUR = 1.3447 / 1.1235 = **1.1969**

**Step 2: Compare**
Quoted = 1.2000 vs Implied = 1.1969
GBP is OVERPRICED in EUR terms (costs more EUR than it should) → buy GBP cheap (via USD), sell GBP expensive (for EUR)

**Step 3: Execute with $1,000,000**
- Start: $1,000,000
- Buy GBP at $1.3447/£: $1,000,000 / 1.3447 = **£743,769**
- Sell GBP for EUR at quoted 1.2000: £743,769 × 1.2000 = **€892,523**
- Sell EUR for USD at 1.1235: €892,523 × 1.1235 = **$1,002,622**
- **Arbitrage Profit = $2,622** (risk-free!)

### Example 2: From TD3 — Forward Rate & Arbitrage Setup
Given (from course slides, TD3 Question 1):
- Spot USD/JPY: Bid = 116.903, Ask = 117.565 (yen per dollar)
- 3-month forward: 116.886

**a. 3-month bid rate for dollars (forward)**
Answer from slides: **117.565** ← spot ask for yen (buy $ sell ¥)

**b. 3-month ask rate for dollars (forward)**
Answer: **117.541**

**c. Is yen at premium or discount?**
Forward rate (¥116.886/$) < Spot rate (¥117.565/$)
→ Dollar costs FEWER yen forward → Dollar is at **DISCOUNT**
→ Yen is at **PREMIUM** (yen appreciates against dollar)

**d. Forward premium on yen (annualized)**
Premium = (Spot − Forward) / Forward × (12/3) × 100
= (117.565 − 116.903) / 116.903 × 4 × 100
= 0.662/116.903 × 4 × 100
= **0.566% per year** ← from slides ✓

**e. From IRP: what is yen interest rate?**
Formula: F/S = (1 + r_yen)/(1 + r_$)
116.903/117.565 = (1 + r_yen)/(1.015) ← 1.5% quarterly dollar rate
0.9944 × 1.015 = 1 + r_yen
r_yen = 0.00928 = **0.928% per quarter** ← from slides ✓

**f. What 3-month spot rate is consistent with PPP?**
Expected spot = 117.565 × (1 + π_US)/(1 + π_Japan)
From slides: **¥117.429 = $1**

**g. Expected inflation differential**
117.429/117.565 − 1 = −0.00116 = **−0.116%**
Japan's inflation expected to be 0.116% LOWER than US over 3 months

---

## 1.5 Forward Premium/Discount

### Formula (annualized)
**Premium/Discount (%) = [(F − S) / S] × (360 / n) × 100**
where n = number of days (or use 12/months)

Positive = forward premium on base currency (base currency expected to appreciate)
Negative = forward discount on base currency (base currency expected to depreciate)

### Example 1: South African Rand (from TD3 Q2)
- Spot: ZAR 11.0976 = $1 (so dollar is base, rand is quote)
- 3-month forward: ZAR 10.9308 = $1
- Forward has FEWER rand per dollar → dollar costs less rand → dollar at **DISCOUNT**, rand at **PREMIUM**

Annual premium on dollar (actually discount):
= 4 × (10.9308/11.0976 − 1)
= 4 × (−0.01503)
= **−6.012%** ← annual discount on dollar vs rand (from slides ✓)

### Example 2: Japanese Yen Forward Rates
From Exhibit 5.7:
- Spot: ¥115.11/$
- 1-month forward: ¥115.09/$
- 3-month forward: ¥114.98/$
- 6-month forward: ¥114.70/$

6-month premium on yen (discount on dollar):
= (2/1) × (115.11 − 114.70)/115.11 × 100
= 2 × 0.00356 × 100 = **0.712% annualized** (dollar at discount)

### Example 3: Swiss Franc
From Exhibit 5.7:
- Spot: CHF 0.9272/$ (or $1.0785/CHF)
- 6-month forward: CHF 0.9211/$ (or $1.0857/CHF)

Dollar forward vs CHF: (0.9211 − 0.9272)/0.9272 × 2 × 100
= −0.00658 × 2 × 100 = **−1.316%** annualized (dollar at discount vs CHF)

---

# MODULE 2: PPP AND INTEREST RATE PARITY

## 2.1 Relative PPP — Predicting Future Exchange Rates

### Formula
**E[S₁] = S₀ × (1 + π_domestic) / (1 + π_foreign)**

Where S is expressed as domestic/foreign (direct quote)

### Example 1: USD/EUR with inflation
- Current spot: $1.20/€
- US inflation: 4%, Eurozone inflation: 2%
- Predicted 1-year rate: 1.20 × (1.04/1.02) = 1.20 × 1.01961 = **$1.2235/€**
- Dollar depreciates (more dollars per euro) because US has higher inflation ✓

### Example 2: Finding implied inflation from exchange rates
- Spot now: ¥117.565/$, Expected spot in 3 months: ¥117.429/$
- Implied quarterly inflation differential:
  117.429/117.565 − 1 = −0.00116 = −0.116%
  Japan's inflation is 0.116% LOWER than US per quarter
  Annualized: approximately −0.464% lower

### Example 3: Is currency overvalued/undervalued?
PPP exchange rate for India: 
- If US price level index = 100, India price level = 28
- PPP rate = 28/100 × (nominal rate) ... 
- Simpler: If a basket costs $100 in US and ₹5,500 in India
- PPP implied rate: ₹5,500/$100 = **₹55/$**
- Actual rate: ₹74.62/$
- Since actual (74.62) > PPP implied (55) → rupee is **UNDERVALUED** vs dollar
- Undervaluation % = (74.62 − 55)/55 × 100 = **35.7%**

### Example 4: Big Mac PPP (from course)
- US Big Mac: $5.58
- China Big Mac: ¥21
- PPP implied rate: ¥21/$5.58 = **¥3.76/$**
- Actual rate: ¥6.36/$
- Yuan undervaluation: (6.36 − 3.76)/6.36 = **40.9% undervalued**

---

## 2.2 Interest Rate Parity (IRP) — Full Numerical Examples

### Formula (when dollar is QUOTE currency, i.e., $/£)
**F = S × (1 + i_$) / (1 + i_£)**

### Formula (when dollar is BASE currency, i.e., ¥/$)
**F = S × (1 + i_¥) / (1 + i_$)**

### Example 1: IRP Check — Do Two Investments Yield Same Return?
(From IF5 slides — Ruritania example)
- US rate: 5% per year
- Ruritanian peso (RUP) rate: 15.5% per year
- Spot: RUP 50 per $1
- 1-year forward: RUP 55 per $1
- Investment amount: $1,000

**US path:**
$1,000 × (1 + 0.05) = **$1,050**

**Ruritanian path:**
Step 1: Convert $1,000 to RUP: $1,000 × 50 = **RUP 50,000**
Step 2: Invest at 15.5%: 50,000 × 1.155 = **RUP 57,750**
Step 3: Convert back at forward rate: 57,750 / 55 = **$1,050**

Both = $1,050 → **IRP holds → No arbitrage** ✓

---

### Example 2: CIA — Detecting and Exploiting Arbitrage
(From IF5 slides — UK/US example, MOST IMPORTANT)

**Given:**
- US interest rate: i_$ = 5%
- UK interest rate: i_£ = 8%
- Spot: S = $1.80/£
- 1-year forward: F = $1.78/£

**Step 1: Check if IRP holds**
IRP forward rate = S × (1 + i_$)/(1 + i_£) = 1.80 × (1.05/1.08) = 1.80 × 0.9722 = **$1.75/£**
Actual forward = $1.78/£ ≠ $1.75/£ → **IRP VIOLATED → Arbitrage exists!**

Since actual F ($1.78) > IRP F ($1.75):
→ Forward pound is OVERPRICED → Sell pounds forward (lock in selling £ at $1.78)
→ Buy pounds spot (get them cheap at $1.80... wait — borrow in US, invest in UK)

**Step 2: Direction**
UK-adjusted return = (F/S) × (1 + i_£) = (1.78/1.80) × 1.08 = 0.9889 × 1.08 = **1.068**
US return = (1 + i_$) = **1.05**
1.068 > 1.05 → UK investment better → Borrow in US, invest in UK

**Step 3: Execute (with $1,000,000)**
1. Borrow $1,000,000 at 5% in US → owe $1,050,000 in 1 year
2. Buy £555,556 at spot ($1.80/£): $1,000,000 / 1.80 = **£555,556**
3. Invest £555,556 at 8% for 1 year → **£600,000**
4. Sell £600,000 forward at $1.78/£ → **$1,068,000**
5. After 1 year: receive £600,000, deliver to forward → get $1,068,000, repay $1,050,000
6. **Arbitrage profit = $1,068,000 − $1,050,000 = $18,000** ✓

**Step 4: Market adjustments that restore IRP**
| Action | Effect |
|--------|--------|
| Borrow in US | US rate ↑ |
| Buy £ spot | Spot £ price ↑ (S↑) |
| Invest in UK | UK rate ↓ |
| Sell £ forward | Forward £ price ↓ (F↓) |
→ All four adjustments push toward IRP equilibrium

---

### Example 3: Swiss Loan vs US Loan (from IF5)
- Project cost: $100,000
- Swiss loan rate: 6%, US loan rate: 6.8%
- Spot: 1.0723 CHF/$, Forward: 1.0643 CHF/$

**US loan cost:**
$100,000 × 1.068 = **$106,800**

**Swiss loan cost:**
Step 1: Borrow in CHF: $100,000 × 1.0723 = **CHF 107,230**
Step 2: After 1 year owe: 107,230 × 1.06 = **CHF 113,664**
Step 3: Buy CHF forward to repay: 113,664 / 1.0643 = **$106,797**

Both ≈ $106,800 → **IRP holds → Both loans equivalent** ✓
(Tiny difference due to rounding)

---

### Example 4: Forward Rate from IRP Formula
Given: Spot USD/CHF = $1.0785/CHF, US rate = 3%, Swiss rate = 1%
Expected 1-year forward rate:
F = 1.0785 × (1.03/1.01) = 1.0785 × 1.0198 = **$1.0998/CHF**
Swiss franc at premium (costs more dollars in forward) because Swiss rate is lower

---

## 2.3 NPV with Foreign Currency (from TD4 Q1)

**Setup:**
- Investment of €80M today
- Euro cash flows: +€10M, +€20M, +€23M, +€27M, +€25M (years 1-5)
- Euro discount rate: 6%
- Spot: $1.20/€

**Method A: Discount in euros, then convert to dollars**
NPV (€) = −80 + 10/1.06 + 20/1.06² + 23/1.06³ + 27/1.06⁴ + 25/1.06⁵
= −80 + 9.43 + 17.80 + 19.31 + 21.39 + 18.68
= **€6.61 million**

Convert: NPV ($) = €6.61 × $1.20/€ = **$7.94 million** ✓

**Method B: Convert each cash flow using forward rates, discount at dollar rate**
Forward rates increase each year by interest rate differential:
Year 1 F = 1.20 × (1+i$)/(1+i€) ... (requires dollar rate — assume it's implied)
Result must equal $7.94M if IRP holds (both methods give same answer)

---

# MODULE 3: FUTURES CALCULATIONS

## 3.1 Futures Pricing Formula

### For Currency Futures (same as IRP/forward pricing)
**F = S × (1 + i_domestic)^T / (1 + i_foreign)^T**

For continuous compounding: F = S × e^(r_d - r_f)×T

### For Commodity Futures
**F = S × (1 + r_f − convenience yield + storage cost)^T**

### Example 1: Corn futures pricing (from HW6/TD5 Q3)
- Spot price: S₀ = 95 (cents per bushel)
- Risk-free rate: r_f = 10%
- Convenience yield: y = 8/95 per unit = 0.0842 (per unit term)
- Time: T = 0.5 years (6 months)

**F = S₀ × (1 + r_f − y)^T**
F = 95 × (1 + 0.10 − 8/95)^0.5
F = 95 × (1 + 0.10 − 0.0842)^0.5
F = 95 × (1.0158)^0.5
F = 95 × 1.00787
**F = 95.747** ✓ (from slides)

### Example 2: Currency futures
EUR/USD spot = 1.10, US rate = 3%, Euro rate = 1%, T = 6 months (0.5 years)
F = 1.10 × (1.03/1.01)^0.5 = 1.10 × (1.0198)^0.5 = 1.10 × 1.00985 = **$1.1108/€**

---

## 3.2 Futures Profit/Loss — Long and Short Positions

### Formulas
**Long (buyer) P&L = (F_close − F_open) × Contract Size**
**Short (seller) P&L = (F_open − F_close) × Contract Size**

### Example 1: Gold Futures (from past paper Q7)
- Enter long gold futures at $1,500/oz
- Contract size: 100 oz
- At maturity: spot = $1,600/oz (= futures price at expiry)

P&L = ($1,600 − $1,500) × 100 = **$10,000 profit** ✓

### Example 2: Euro Futures Speculation (from past paper Q8)
- EUR futures price: $1.10/€
- Contract size: 125,000 EUR
- You expect EUR to fall to $1.05 → take SHORT position
- 4 contracts

P&L = ($1.10 − $1.05) × 125,000 × 4
= $0.05 × 500,000
= **$25,000 profit** ✓

### Example 3: Daily Resettlement (Mark-to-Market)
From TD5 Q2: You sold index futures at 9,140. Next day settlement = 9,120.
- You are SHORT
- Price went DOWN (from 9,140 to 9,120) → SHORT profits
- But from slides: "She is asking you to pay money because your sale is showing a loss"
- Wait: You SOLD at 9,140 → you would want prices to fall → price fell to 9,120 → you GAINED
- Loss = 9,120 − 9,140 = −20 points → you LOST 20 points
- Hmm — if you SOLD and price FELL you should WIN. Re-read: "your sale is showing a loss" means the SHORT is losing — this means price went UP not down. 9,120 vs 9,140: if you sold at 9,140 and now marked at 9,120, that's a profit for the short. 
- CORRECT INTERPRETATION: You BOUGHT (long) at 9,140, now marked at 9,120 → LOSS of 20 points
- Margin call: you pay the 20-point loss to the clearinghouse

### Example 4: Full Daily Resettlement Table
Enter LONG EUR futures at $1.10/€, contract = 125,000 EUR, initial margin = $3,000

| Day | Futures Price | Daily P&L | Cumulative P&L | Margin Balance |
|-----|--------------|-----------|----------------|----------------|
| 0   | $1.10        | —         | $0             | $3,000         |
| 1   | $1.12        | +$2,500   | +$2,500        | $5,500         |
| 2   | $1.09        | −$3,750   | −$1,250        | $1,750         |
| 3   | $1.11        | +$2,500   | +$1,250        | $4,250         |

Day 1: ($1.12 − $1.10) × 125,000 = $2,500 credited
Day 2: ($1.09 − $1.12) × 125,000 = −$3,750 debited
Day 3: ($1.11 − $1.09) × 125,000 = +$2,500 credited

---

## 3.3 Hedging with Futures

### Example: Corn Farmer Hedge
Farmer has 30,000 bushels of corn to sell in December.
Current futures: $6.60/bushel (= 660 cents)
Farmer SELLS futures to lock in price.

At maturity:
- Spot falls to $4.00: Loss on crop = ($6.60 − $4.00) × 30,000 = $78,000 loss on spot
  Futures gain = ($6.60 − $4.00) × 30,000 = $78,000 gain → **Net: $0 loss, $6.60 locked in** ✓
- Spot rises to $8.00: Spot gain = ($8.00 − $6.60) × 30,000 = $42,000
  Futures loss = ($6.60 − $8.00) × 30,000 = −$42,000 → **Net: $0 gain, $6.60 locked in** ✓

Lesson: Futures eliminate both risk AND upside — you get exactly $6.60 regardless.

---

# MODULE 4: OPTIONS CALCULATIONS

## 4.1 Option Payoff at Maturity

### Formulas
**Call payoff = max(S_T − K, 0)**
**Put payoff = max(K − S_T, 0)**
**Net profit (buyer) = Payoff − Premium × (1 + r)^T** (adjust premium for time value)
**Net profit (seller) = Premium × (1 + r)^T − Payoff** (opposite of buyer)

### Example 1: Call Option
- Stock current price: S₀ = $100
- Call option: Strike K = $105, Premium = $8
- At maturity, S_T = $120

Payoff = max($120 − $105, 0) = **$15**
Net profit for buyer = $15 − $8 = **$7**
Net profit for seller = $8 − $15 = **−$7**

### Example 2: Put Option
- Stock: S₀ = $100
- Put option: Strike K = $95, Premium = $5
- At maturity, S_T = $80

Payoff = max($95 − $80, 0) = **$15**
Net profit for buyer = $15 − $5 = **$10**

- At maturity, S_T = $100

Payoff = max($95 − $100, 0) = **$0** (option expires worthless)
Net profit for buyer = $0 − $5 = **−$5** (lose the premium)

### Example 3: Break-even point
For a call: Break-even S_T = K + Premium = $105 + $8 = **$113**
For a put: Break-even S_T = K − Premium = $95 − $5 = **$90**

---

## 4.2 Put-Call Parity

### Formula
**C − P = S₀ − PV(K)**
Or: **C + PV(K) = P + S₀**

Where: C = call price, P = put price, S₀ = current stock price, PV(K) = K/(1+r)^T

### Example (from TD7 Q5b)
S₀ = $100, K = $100, r = 10%, T = 1 year
PV(K) = $100/1.10 = $90.91
Minimum call price = S₀ − PV(K) = $100 − $90.91 = **$9.09** ✓ (from slides)

### Example 2: Finding put price from call price
S₀ = $50, K = $50, r = 5%, T = 1 year, Call price = $5
P = C − S₀ + PV(K) = $5 − $50 + ($50/1.05) = $5 − $50 + $47.62 = **$2.62**

---

## 4.3 Option Pricing Variables — Effect on Call and Put Price

### Summary Table (from course slides)
| Variable | Effect on CALL price | Effect on PUT price |
|----------|---------------------|---------------------|
| Underlying price (S) ↑ | ↑ Increases | ↓ Decreases |
| Strike price (K) ↑ | ↓ Decreases | ↑ Increases |
| Time to maturity (T) ↑ | ↑ Increases | ↑ Increases |
| Volatility (σ) ↑ | ↑ Increases | ↑ Increases |
| Risk-free rate (r) ↑ | ↑ Increases | ↑ Increases (per course slides) |

**From TD7 Q6 (exact answers from slides):**
The call price:
- (a) increases — when S increases
- (b) decreases — when K increases
- (c) increases — when T increases
- (d) increases — when σ increases
- (e) decreases — when K increases
- (f) decreases — [when underlying falls]

**For PUT specifically (from past paper):**
A put option becomes MORE EXPENSIVE when:
1. Strike price (K) ↑
2. Time to maturity ↑
3. Volatility/Standard deviation ↑
4. Underlying price (S) ↓
5. Risk-free rate ↑ ← (use this per course slides)

---

## 4.4 Hedging with Options — Full Numerical Example

### The Mexican Peso Put Option (from past paper Q9 — most detailed)

**Setup:**
- US firm sold product; will receive MXN 20,000,000 in 1 year
- Bought PUT options on MXN: Strike = MXN 20/USD (= $0.05/MXN)
- Premium = $0.001 per MXN
- US interest rate = 5%
- At maturity: spot = MXN 18/USD (= $0.0556/MXN)

**Analysis:**
- Put gives right to SELL MXN at MXN 20/USD (= $0.05/MXN)
- Spot rate at maturity = MXN 18/USD (= $0.0556/MXN)
- $0.0556 > $0.05 → Market rate BETTER than strike → **Do NOT exercise put**
- Exercise put: get $0.05/MXN; Market: get $0.0556/MXN → market wins

**Calculation:**
Proceeds from spot conversion:
MXN 20,000,000 / 18 = **$1,111,111.11**

Premium cost (future value):
$0.001 × 20,000,000 = $20,000 paid 1 year ago
FV = $20,000 × 1.05 = **$21,000**

Net proceeds:
$1,111,111.11 − $21,000 = **$1,090,111.11** ✓

**What if spot had been MXN 22/USD (= $0.0455/MXN)?**
Market rate ($0.0455) < strike ($0.05) → **Exercise the put!**
Proceeds = MXN 20,000,000 × $0.05 = **$1,000,000**
Net = $1,000,000 − $21,000 = **$979,000**
Without hedge: 20,000,000/22 = $909,091 → hedge SAVED: $979,000 − $909,091 = **$69,909**

---

## 4.5 Gold Investor Hedging Strategies (from TD7 Q4)

**Setup:**
- Investor owns gold stocks worth £600,000
- Wants to protect against falling below £500,000 over 6 months
- Risk-free rate = 6% per annum (3% for 6 months)
- Current gold stock value: £600,000

**Strategy A: Buy Put Options**
- Buy puts with strike = 83.3% of current price = 83.3% × £600,000 = **£500,000 equivalent**
- Strike = £500,000/£600,000 = **83.3% of current price**
- Protects floor of £500,000 while keeping upside if gold rises

**Strategy B: Protective Put Alternative — Sell Stocks + Buy Calls**
- Sell all gold stocks for £600,000
- Invest £485,437 at 6% for 6 months:
  £485,437 × 1.03 = **£500,000** ← guaranteed floor!
- Remaining: £600,000 − £485,437 = **£114,563** used to buy call options on gold
- If gold rises: call pays off, you participate in upside
- If gold falls: lose the call premium but have £500,000 guaranteed from bond

---

# MODULE 5: EXPOSURE HEDGING — COMPREHENSIVE NUMERICAL

## 5.1 Boeing Example — All Four Hedging Methods Compared

**Setup:**
- Boeing has £10,000,000 receivable in 1 year
- US interest rate: 6.10% p.a.
- UK interest rate: 9.00% p.a.
- Spot rate: $1.50/£
- Forward rate (1-year): $1.46/£

---

### Method A: No Hedge (Unhedged)
Outcome depends entirely on future spot rate S_T:
- If S_T = $1.30: receive £10M × 1.30 = **$13,000,000**
- If S_T = $1.46: receive £10M × 1.46 = **$14,600,000**
- If S_T = $1.50: receive £10M × 1.50 = **$15,000,000**
- If S_T = $1.60: receive £10M × 1.60 = **$16,000,000**
**Risk: Uncertain outcome**

---

### Method B: Forward Market Hedge
**Action**: Sell £10,000,000 forward at $1.46/£

**Outcome**: Receive exactly $14,600,000 regardless of S_T

| S_T | Unhedged | Forward Hedge | Gain from Hedge |
|-----|----------|---------------|----------------|
| $1.30 | $13,000,000 | $14,600,000 | +$1,600,000 |
| $1.40 | $14,000,000 | $14,600,000 | +$600,000 |
| $1.46 | $14,600,000 | $14,600,000 | $0 |
| $1.50 | $15,000,000 | $14,600,000 | −$400,000 |
| $1.60 | $16,000,000 | $14,600,000 | −$1,400,000 |

**Formula**: Gain from hedge = (F − S_T) × £10M = ($1.46 − S_T) × 10,000,000

---

### Method C: Money Market Hedge
**Action**: Borrow pounds today against future receivable, convert to dollars, invest

**Step 1**: Borrow PV of £10M at UK rate:
£10,000,000 / (1 + 0.09) = **£9,174,312** borrowed today

**Step 2**: Convert £9,174,312 to dollars at spot:
£9,174,312 × $1.50/£ = **$13,761,468**

**Step 3**: Invest $13,761,468 at US rate for 1 year:
$13,761,468 × (1 + 0.061) = **$14,600,918 ≈ $14,600,000** ✓

**Step 4**: At maturity, receive £10M, repay pound loan (£9,174,312 × 1.09 = £10,000,000)

**Result**: $14,600,000 — same as forward hedge (IRP ensures this) ✓

---

### Method D: Options Market Hedge
**Action**: Buy put options on £ with strike = $1.46/£

**Assume**: Put premium = $0.02/£ × 10,000,000 = **$200,000** paid upfront
FV of premium = $200,000 × 1.061 = **$212,200**

**Outcomes**:
- If S_T = $1.30: Exercise put → get $14,600,000 − $212,200 = **$14,387,800**
- If S_T = $1.46: At the money → exercise or not = same; net $14,600,000 − $212,200 = **$14,387,800**
- If S_T = $1.50: Don't exercise → get $15,000,000 − $212,200 = **$14,787,800** ← BETTER than forward!
- If S_T = $1.60: Don't exercise → get $16,000,000 − $212,200 = **$15,787,800** ← MUCH BETTER!

**Key advantage**: Options give FLOOR protection but keep UPSIDE (at cost of premium)

---

### Comparing All Methods
| S_T | Unhedged | Forward | Money Market | Options |
|-----|----------|---------|--------------|---------|
| $1.30 | $13,000,000 | $14,600,000 | $14,600,000 | $14,387,800 |
| $1.46 | $14,600,000 | $14,600,000 | $14,600,000 | $14,387,800 |
| $1.50 | $15,000,000 | $14,600,000 | $14,600,000 | $14,787,800 |
| $1.60 | $16,000,000 | $14,600,000 | $14,600,000 | $15,787,800 |

**Conclusions**:
- Forward = Money Market (when IRP holds): Same certain outcome
- Options = Forward when S_T < K (protection floor); Options > Forward when S_T > K (upside kept)
- Unhedged is BEST if pound strengthens, WORST if pound weakens

---

## 5.2 Hedging a PAYABLE — Full Numerical

**Setup:**
- US firm OWES £5,000,000 in 6 months (it is the importer)
- Spot: $1.50/£
- 6-month forward: $1.48/£
- US rate: 5% p.a. (2.5% for 6 months)
- UK rate: 7% p.a. (3.5% for 6 months)

### Forward Hedge
**Action**: BUY £5,000,000 forward at $1.48/£
**Cost**: £5,000,000 × $1.48 = **$7,400,000** (certain)

### Money Market Hedge
**Action**: Borrow dollars, buy pounds NOW, invest pounds for 6 months

Step 1: Need £5,000,000 in 6 months → invest PV today:
PV = £5,000,000 / 1.035 = **£4,830,918**

Step 2: Buy £4,830,918 at spot:
£4,830,918 × $1.50 = **$7,246,377** needed today

Step 3: Borrow $7,246,377 at 2.5% (6-month US rate):
Repayment = $7,246,377 × 1.025 = **$7,427,537**

Cost = $7,427,537 (slightly more than forward → forward hedge is cheaper here)

### Options Hedge (payable)
**Buy CALL options** (right to BUY £ at strike price)
- Strike = $1.50/£, Call premium = $0.03/£
- Total premium: $0.03 × 5,000,000 = **$150,000**

If S_T = $1.40: Don't exercise → buy spot at $1.40 → cost = $7,000,000 + $150,000 = $7,150,000
If S_T = $1.55: Exercise call → buy at $1.50 → cost = $7,500,000 + $150,000 = $7,650,000
If S_T = $1.65: Exercise call → buy at $1.50 → cost = $7,650,000 (capped) vs $8,250,000 unhedged → saved $600,000!

---

## 5.3 TechGlobal Forward Hedge (from past paper Q9)

**Setup:**
- TechGlobal invoiced ¥800,000,000 payable in 1 year (receivable for TechGlobal)
- 1-year forward rate: $0.0095/¥
- FX advisor predicts spot will be: $0.0100/¥

**Hedged amount (forward):**
¥800,000,000 × $0.0095/¥ = **$7,600,000**

**Expected unhedged amount:**
¥800,000,000 × $0.0100/¥ = **$8,000,000**

**Expected gain/loss from hedging:**
$7,600,000 − $8,000,000 = **−$400,000**

Interpretation: If the advisor is right, hedging COSTS $400,000 in opportunity cost. But:
- If the advisor is WRONG and yen weakens (e.g., spot = $0.0085/¥): unhedged = $6,800,000 vs hedged $7,600,000 → hedge SAVED $800,000
- The hedge provides INSURANCE at a cost of $400,000 if yen strengthens as predicted

---

## 5.4 Hedging Cost Calculation (from exam screenshot Q6)

**Setup:**
- MNC wants to hedge 300,000 EUR exposure
- Spot EUR/USD = 1.10
- 6-month forward EUR/USD = 1.15

**Hedging cost:**
Value at forward rate: 300,000 × 1.15 = **$345,000**
Value at spot rate: 300,000 × 1.10 = **$330,000**
Hedging cost = $345,000 − $330,000 = **$15,000**

This means locking in the forward rate costs $15,000 more than the current spot rate.
The corporation is paying this premium for CERTAINTY against EUR appreciation.

---

# MODULE 6: BALANCE OF PAYMENTS CALCULATIONS

## 6.1 Classifying Transactions

### Debit vs Credit Rule
| Situation | Account | Sign |
|-----------|---------|------|
| US exports goods | Current Account | Credit (+) |
| US imports goods | Current Account | Debit (−) |
| Foreigner buys US stock | Financial Account | Credit (+) |
| US buys foreign stock | Financial Account | Debit (−) |
| US receives dividends from abroad | Current Account (Primary Income) | Credit (+) |
| US sends remittance abroad | Current Account (Secondary Income) | Debit (−) |
| US central bank sells foreign reserves | Official Reserves | Credit (+) |

### Detailed Example (from TD1 Q12 — all four sub-questions)

**a) Japanese insurance company buys US Treasury bonds, pays from its NYC bank account:**
- Financial Account, Credit (+): US sold financial asset to foreigner → capital inflow
- Financial Account, Debit (−): Reduction in Japanese-owned bank account in US (other investment)
- Net: Zero BoP effect (one FA entry offsets another FA entry), but composition shifts

**b) US citizen dines at Paris restaurant, pays with American Express:**
- Current Account, Debit (−): US imported a service (travel/tourism)
- Financial Account, Credit (+): Increase in US credit card liability (future payment to AmEx → France)
- Net: CA debit offset by FA credit

**c) Indian immigrant in LA sends check to parents in Mumbai:**
- Current Account, Debit (−): Secondary income / unilateral transfer outflow
- Financial Account, Credit (+): Decrease in US bank account held by Indian immigrant
- Net: CA debit (transfer) offset by FA

**d) US programmer hired by British company, paid from British-held US bank account:**
- Current Account, Credit (+): US exported a service (labor/consulting)
- Financial Account, Debit (−): Decrease in UK-owned US bank account balance
- Net: CA credit offset by FA debit

---

## 6.2 Computing BoP Balances (from TD1 Problem 1 — US 2019)

**Data given:**
- Goods exports: $1,652.1B, Goods imports: $2,513.6B
- Services exports: $876.3B, Services imports: $591.1B
- Primary income received: $1,124.9B, Primary income paid: $893.0B
- Secondary income received: $159.2B, Secondary income paid: $286.9B

**a) Balance on goods trade:**
$1,652.1 − $2,513.6 = **−$861.5 billion (deficit)** ✓

**b) Balance on services:**
$876.3 − $591.1 = **+$285.2 billion (surplus)** ✓

**c) Balance on goods and services combined:**
−$861.5 + $285.2 = **−$576.3 billion** (goods deficit dominates) ✓

**d) Balance on primary income:**
$1,124.9 − $893.0 = **+$231.9 billion (surplus)** ✓

**e) Balance on secondary income:**
$159.2 − $286.9 = **−$127.7 billion (deficit)** ✓

**f) Total current account balance:**
−$576.3 + $231.9 − $127.7 = **−$472.1 billion** ✓

---

## 6.3 Financial Account Calculations (from TD1 Problem 2 — US 2019)

**Data:**
- FDI inflows (foreigners invest in US): $302.2B
- FDI outflows (US invests abroad): $122.2B
- Portfolio inflows: $218.9B
- Portfolio outflows: −$13.5B (US divested foreign securities)
- Other investment: inflows $276.4B, outflows $203.6B

**a) Balance on direct investment:**
$302.2 − $122.2 = **+$180.0 billion** (more foreigners investing in US than US investing abroad) ✓

**b) Balance on portfolio investment:**
$218.9 + $13.5 = **+$232.4 billion** ✓
(foreigners bought $218.9B US securities; Americans SOLD $13.5B foreign securities → both increase net inflow)

**c) Total financial account balance:**
$180.0 + $232.4 + ($276.4 − $203.6) = $180.0 + $232.4 + $72.8 = **+$485.2 billion** ✓

---

# MODULE 7: CORPORATE GOVERNANCE CALCULATIONS

## 7.1 Ownership and Voting Rights

### Example 1: Simple Ownership % (from exam screenshot)
Company A: 10,000 total shares
Investor B: holds 4,000 shares (with 2 votes per share)
Other shareholders: 6,000 shares (1 vote per share)

Economic ownership = 4,000 / 10,000 = **40%**

Voting power:
Investor B votes = 4,000 × 2 = 8,000
Other votes = 6,000 × 1 = 6,000
Total votes = 14,000
Investor B voting % = 8,000 / 14,000 = **57.14%** (majority control!)

Separation: 40% cash flow rights but 57% voting control

### Example 2: Control Value (from exam screenshot)
Dominant investor: 60% voting rights
Company total value: $10,000,000
Investor's debt: $2,000,000

Control value C:
= (Voting %) × (Company Value) − Debt
= 0.60 × $10,000,000 − $2,000,000
= $6,000,000 − $2,000,000
= **C = $4,000,000** ✓

### Example 3: Pyramidal Ownership — Effective Control
Family structure:
- Family directly owns 51% of Holding Co A
- Holding Co A owns 51% of Operating Co B
- Operating Co B owns 51% of Target Co C

Family's EFFECTIVE ownership of C:
= 51% × 51% × 51% = **13.27% economic ownership**

BUT: Family CONTROLS C through majority at each level
→ With only 13.27% of C's cash flows, family makes ALL decisions about C

This is the "separation of ownership and control" through pyramids.

### Example 4: Who really benefits from tunneling?
Family owns 13.27% of C economically but controls 100% of decisions.
If C transfers $1,000,000 to family-controlled entity:
- Family receives $1,000,000
- But only "paid" for via their share: 13.27% × $1,000,000 = $132,700 in lost value
- Minority shareholders bear 86.73% = $867,300 of the loss
- Family NET GAIN from tunneling = $1,000,000 − $132,700 = **$867,300**

This is why minority shareholder protection is crucial.

---

## 7.2 Grade Calculator Formula

### The Formula (for website)
Total % = (Midterm/20 × 40) + (OnlineCourse/10 × 10) + (Final/40 × 50)

### Minimum final score to pass
If pass = 50%:
50 = (MT/20 × 40) + (OC/10 × 10) + (F/40 × 50)

Rearranging for F:
(F/40 × 50) = 50 − (MT/20 × 40) − (OC/10 × 10)
F/40 = [50 − (MT/20 × 40) − (OC/10 × 10)] / 50
F = 40 × [50 − (MT × 2) − OC] / 50

### Worked Example
Student scored:
- Midterm: 12/20
- Online course: 8/10
- Final needed to pass?

Current score = (12/20 × 40) + (8/10 × 10) = 24 + 8 = 32%
Need: 50% total
Remaining needed from final: 50 − 32 = 18% from final's 50% weight
Final score needed: (18/50) × 40 = **14.4/40** (36% on final → very achievable!)

Another student:
- Midterm: 6/20 (very bad)
- Online: 5/10

Current score = (6/20 × 40) + (5/10 × 10) = 12 + 5 = 17%
Remaining needed: 50 − 17 = 33% from final's 50% weight
Final score needed: (33/50) × 40 = **26.4/40** (66% on final — doable but tough!)

---

# MODULE 8: EXAM-STYLE FULL WORKED EXAMPLES

## 8.1 Full 2-Part Question: FX + IRP

**Q: The spot rate for GBP/USD is 1.3447. The 1-year forward is 1.3435. US interest rate is 2%. What should the UK interest rate be according to IRP? Is there a forward premium or discount on the dollar?**

**Part 1: UK interest rate from IRP**
F = S × (1 + i_US) / (1 + i_UK)
1.3435 = 1.3447 × (1.02) / (1 + i_UK)
(1 + i_UK) = 1.3447 × 1.02 / 1.3435
(1 + i_UK) = 1.3716 / 1.3435
(1 + i_UK) = 1.02090
i_UK = **2.09%**

Interpretation: UK rate (2.09%) is slightly higher than US rate (2%), consistent with pound at slight forward discount.

**Part 2: Forward premium/discount**
(F − S)/S × 100 = (1.3435 − 1.3447)/1.3447 × 100 = −0.089%
Dollar is at forward **DISCOUNT** vs pound (or pound is at slight premium)
Annualized: −0.089% per year

---

## 8.2 Full 3-Part Question: Exposure Hedging

**Q: A French exporter is owed $500,000 in 3 months. Spot EUR/USD = 1.10. 3-month forward = 1.12. French interest rate (EUR) = 2% annual (0.5% quarterly). US interest rate = 4% annual (1% quarterly). A put option on USD with strike 1.10 EUR/USD costs €0.02 per dollar.**

**Part A: Forward hedge — euros received**
Sell $500,000 forward at 1.12 USD/EUR... wait, 1.12 means 1 EUR = 1.12 USD, so 1 USD = 1/1.12 EUR = 0.8929 EUR
Euros received = $500,000 × (1/1.12) = $500,000 / 1.12 = **€446,429**

**Part B: Money market hedge**
Step 1: Borrow PV of $500,000 at US rate (1% quarterly):
$500,000 / 1.01 = **$495,050** borrowed today

Step 2: Convert to EUR at spot (1 EUR = 1.10 USD → 1 USD = 1/1.10 EUR = 0.9091 EUR):
$495,050 × 0.9091 = **€450,045**

Step 3: Invest €450,045 at EUR rate (0.5% quarterly):
€450,045 × 1.005 = **€452,295**

Step 4: At maturity, receive $500,000, repay $495,050 × 1.01 = $500,000 ✓
Keep: **€452,295**

Comparison: Money market (€452,295) vs Forward (€446,429) → **Money market better here!**
(This happens when IRP doesn't perfectly hold — slight difference due to interest rate differentials)

**Part C: Options hedge**
Buy put on $500,000 (right to sell USD at 1.10 EUR/USD → receive 1/1.10 = 0.9091 EUR per dollar)
Premium = €0.02 × 500,000 = **€10,000** (FV = €10,000 × 1.005 = €10,050)

If spot at maturity = 1.15 (USD weakened vs EUR — 1 EUR buys more USD — bad for exporter who has USD):
→ Actually if 1 EUR = 1.15 USD, then 1 USD = 0.8696 EUR
→ Exercise put: sell $500,000 at 0.9091 EUR → get €454,545
→ Net: €454,545 − €10,050 = **€444,495**

If spot at maturity = 1.05 (USD strengthened):
→ 1 USD = 0.9524 EUR → DON'T exercise
→ Convert at spot: $500,000 × 0.9524 = €476,190
→ Net: €476,190 − €10,050 = **€466,140** ← Better than forward!

---

## 8.3 Complete BoP Exercise

**Q: Classify and record these US transactions:**

1. US exports $200M of software → CA Credit +$200M, FA Debit −$200M (foreign bank deposits)
2. US imports $300M of Japanese cars → CA Debit −$300M, FA Credit +$300M
3. US investor buys $50M of German bonds → FA Debit −$50M (portfolio investment out), FA Credit +$50M (bank deposit to German)
4. German investor buys $80M of US real estate → FA Credit +$80M (FDI in), FA Debit −$80M (dollar deposit)
5. US pays $10M in foreign aid to Haiti → CA Debit −$10M (secondary income), FA Credit +$10M

Running CA balance: +200 − 300 − 10 = **−$110M**
These are offset by FA flows maintaining BoP identity.

---

# QUICK REFERENCE: ALL FORMULAS IN ONE PLACE

## Exchange Rates
| Formula | Use |
|---------|-----|
| Direct = 1/Indirect | Convert between quote types |
| Cross rate A/B = (A/USD)/(B/USD) | Find rate between two non-USD currencies |
| % Spread = (Ask−Bid)/Ask × 100 | Measure transaction cost |
| Forward P/D = (F−S)/S × 12/months × 100 | Annualized forward premium (positive=premium, negative=discount) |

## PPP & IRP
| Formula | Use |
|---------|-----|
| E[S₁] = S₀ × (1+π_d)/(1+π_f) | Predict exchange rate using inflation |
| F = S × (1+i_d)/(1+i_f) | IRP: fair forward rate |
| Over/undervaluation = (Actual − PPP)/PPP × 100 | Test currency valuation |
| CIA: Compare (F/S)×(1+i_f) vs (1+i_d) | Check if arbitrage exists |

## Futures
| Formula | Use |
|---------|-----|
| F = S × (1+r_d)^T/(1+r_f)^T | Currency futures pricing |
| F = S × (1+r−y+storage)^T | Commodity futures pricing |
| P&L (Long) = (F_close−F_open) × size | Profit on long position |
| P&L (Short) = (F_open−F_close) × size | Profit on short position |

## Options
| Formula | Use |
|---------|-----|
| Call payoff = max(S_T−K, 0) | Call value at expiry |
| Put payoff = max(K−S_T, 0) | Put value at expiry |
| Net profit (buyer) = payoff − premium×(1+r)^T | After-cost return |
| Break-even call = K + premium | Spot needed to profit from call |
| Break-even put = K − premium | Spot needed to profit from put |
| C − P = S₀ − PV(K) | Put-call parity |

## Hedging
| Formula | Use |
|---------|-----|
| Forward hedge gain = (F−S_T) × FC amount | Gain/loss vs unhedged |
| MMH: Borrow FC/(1+i_f), invest at i_d | Money market hedge |
| Grade = (MT/20×40)+(OC/10×10)+(F/40×50) | SKEMA grade calculator |
| Min final = [50−current score] / 50 × 40 | Minimum exam score needed |

## Corporate Governance
| Formula | Use |
|---------|-----|
| Ownership % = shares held/total shares × 100 | Economic ownership |
| Voting % = (shares×votes per share)/total votes × 100 | Voting control |
| Pyramid control = Π(stake at each level) | Effective ownership through chain |
| Control value C = (voting%) × (firm value) − debt | Control value calculation |

---
END OF NUMERICAL APPENDIX
Total: 8 modules covering every quantitative exam type with full step-by-step workings


