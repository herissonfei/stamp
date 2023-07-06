<?php

namespace App\Http\Controllers;

use App\Models\Bid;
use App\Models\Stamp;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class BidController extends Controller
{
    public function test()
    {
        //bids,  stamps

        $test = Bid::select('bids.id', 'bids.bidStampId','bids.bidderId','bids.bidTime','bids.startDate','bids.endDate','bids.favorites','stamps.name','stamps.startingPrice','stamps.reservePrice','stamps.sellerId','stamps.categoryId','stamps.auctionCount','stamps.creationDate','stamps.dimensions','stamps.country','stamps.conditions','stamps.status','stamps.certified','stamps.description','stamps.type', 'stampimages.imageURL')
        ->join('stamps', 'stamps.id', '=', 'bids.bidStampId')
        ->join('stampimages', 'stamps.id', '=', 'stampimages.stampId')
        ->get();
        
       

        return response()->json($test);

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Bid  $bid
     * @return \Illuminate\Http\Response
     */
    public function show(Bid $bid)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Bid  $bid
     * @return \Illuminate\Http\Response
     */
    public function edit(Bid $bid)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Bid  $bid
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bid $bid)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Bid  $bid
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bid $bid)
    {
        //
    }
}
