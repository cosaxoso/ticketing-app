<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class TicketResource extends JsonResource
{

    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"=> $this->id,
            "name" => $this->name,
            "subject"=> $this->subject,
            "department"=>$this->department,
            "created_at"=>(new Carbon($this->created_at))->toDateTimeString(),
            "email"=> $this->email,
            "ip_address"=> $this->ip_address,
            "details"=> $this->details,
            "status"=> $this->status,
            "urgency"=> $this->urgency,
            // "assigned_name"=>

        ];
    }
}
