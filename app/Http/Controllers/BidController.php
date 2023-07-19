<?php

namespace App\Http\Controllers;

use App\Models\Bid;
use App\Models\Stamp;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class BidController extends Controller
{
    // 获取所有的Bids
    public function getAllBids()
    {
        //bids,  stamps, image的数据

        $bids = Bid::select('bids.id', 'bids.bidStampId','bids.bidderId','bids.bidTime','bids.auctionCount','bids.startDate','bids.endDate','bids.favorites','stamps.name','stamps.startingPrice','stamps.reservePrice','stamps.creationDate','stamps.dimensions','stamps.country','stamps.conditions','stamps.status','stamps.certified','stamps.description','stamps.type', 'stampimages.imageURL')
        ->join('stamps', 'stamps.id', '=', 'bids.bidStampId')
        ->join('stampimages', 'stamps.id', '=', 'stampimages.stampId')
        ->get();
    
        return response()->json($bids);
    }

    public function getOneBid($id)
    {
        //bids,  stamps

        $bid = Bid::select('bids.id', 'bids.bidStampId','bids.bidderId','bids.bidTime','bids.auctionCount','bids.startDate','bids.endDate','bids.favorites','stamps.name','stamps.startingPrice','stamps.reservePrice','stamps.creationDate','stamps.dimensions','stamps.country','stamps.conditions','stamps.status','stamps.certified','stamps.description','stamps.type', 'stampimages.imageURL')
        ->join('stamps', 'stamps.id', '=', 'bids.bidStampId')
        ->join('stampimages', 'stamps.id', '=', 'stampimages.stampId')
        ->where('bids.id', '=', $id)
        ->get();
       
        return response()->json($bid);
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

    public function uploadImage(Request $request)
    { 
    if ($request->hasFile('image')) {
        $image = $request->file('image');
        $fileName = $image->getClientOriginalName(); 

        // 将上传的图片保存到 img\jpg\encheres/ 目录
        $image->move(public_path('img\jpg\encheres'), $fileName);

        // 返回成功响应
        return response()->json(['message' => '图片上传成功', 'url' => asset('img/jpg/encheres/' . $fileName)], 200);
    }

    // 返回失败响应
    return response()->json(['message' => '图片上传失败'], 400);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    { 
        return response()->json($request);
   
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
